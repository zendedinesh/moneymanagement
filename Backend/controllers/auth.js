const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');


// @desc Register User
// @route POST /api/v1/auth/register
// @access Public                                 // why next 
exports.register = asyncHandler(async (req, res, next) => {
    const { name, email, password, role } = req.body;

    // Register user
    const user = await User.create({
        name,
        email,
        password,
        role
    });

    sendTokenResponse(user, 200, res);
}); 

// @desc Login User   
// @eoute POST /api/v1/auth/login 
// @access Public
exports.login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    // get User                               // what if i don't use this .select('+password') and explain  the meaning 
    const user = await User.findOne({ email }).select('+password');

    // User not found
    if (!user) {
        return next(new ErrorResponse(`User not found with email ${email}`, 401)); 
    }

    // comapre password
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
        return next(new ErrorResponse('Invalid email and password', 401)); 
    }

    sendTokenResponse(user, 200, res); 
});

// Genrate JWT web token and cookies and send to res
const sendTokenResponse = (user, status, res) => {
    // get token
    const token = user.getJWTWebToken();

    console.log('Date.now : ', Date.now()); //explain current time but why
    console.log('process.env.JWT_COOKIE_EXPIRE : ', process.env.JWT_COOKIE_EXPIRE);// explain 

    console.log('expire time : ', new Date(Date.now() + '30d'));
 


    const option = {
        expires: new Date(Date.now() + (1000 * 60 * 60 * 24 * 30)), 
        httpOnly: true//why true 
    }

    if (process.env.NODE_ENV === 'production') {
        option.secure = true
    }//explain 

    res // explain 
        .status(status)
        .cookie('token', token, option)
        .json({ success: true, token });
}

// @desc Get login user
// @eoute Get /api/v1/auth/me
// @access Private
exports.getMe = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res
        .status(200)
        .json({
            success: true,
            data: user
        });
});