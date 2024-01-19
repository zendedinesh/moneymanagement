const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    let error = {...err};
    // console.log('error in midleware : ', error);
    // console.log('req : ', req);
    // console.log('res : ', res);
    error.message = err.message ;

    // Mongoose cast error
    console.log(err);
    if (err.name === 'CastError') {
        const message = `Can not find bootcamp with id ${error.value}`; 
        error = new ErrorResponse(message, 404);
    }

    // Mongoose Duplicate key 
    if(err.code === 11000) {
        const message = 'Duplicate field value entered';
        error = new ErrorResponse(message, 400);
    }

    // Mongoose validation error
    if(err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(value => value.message);
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json(
        {
            success: false,
            error: error.message || 'Server error'
        });
}

module.exports = errorHandler;