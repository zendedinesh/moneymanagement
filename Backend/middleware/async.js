const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req,res,next)).catch(next);
} //why fn

module.exports = asyncHandler; 