const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: [true, 'Please enter the name'], 
        trim: true //why
    },
    email: {
        type: String,
        required: [true, 'Please provide email address'],
        unique: true,
        match:[/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Please provide a valid emial'] ,
        trim: true //why
    },
    role: {
        type: String,
        enum: ['user', 'publisher'], 
        default: 'user' ,
        trim: true //why
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [6, 'The password must be more than 6 character'],
        select: false,//why,,
        trim: true //why
    },
   
    resetPasswordToken: String, //explain
    restePasswordExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now 
    } 
});

// Encript password 
UserSchema.pre('save', async function(next) {   //Middleware that runs before saving a user to the database. It hashes the password using bcrypt.
    const salt = await bcrypt.genSalt(10);//explain  gensalt
    this.password = await bcrypt.hash(this.password, salt);  
    next();
});

// Sign JWT and return
UserSchema.methods.getJWTWebToken = function() { //= ...: Defines a method for the user schema to generate a JWT token. It uses the jsonwebtoken library to sign a token with the user's ID and a secret key.
    return jwt.sign({id: this._id}, process.env.JWT_TOKEN_SECRET_KEY,{
        expiresIn: process.env.JWT_TOKEN_EXPIRE
    });
}

// Match enter password and hash
UserSchema.methods.matchPassword = async function(enterPassword) { // Defines a method for the user schema to compare a provided password with the stored hashed password. It uses bcrypt to compare the passwords securely.
    return await bcrypt.compare(enterPassword, this.password);
}

module.exports = mongoose.model('User', UserSchema);