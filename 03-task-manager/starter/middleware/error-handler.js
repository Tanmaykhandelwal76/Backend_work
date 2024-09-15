const {CustomAPIError} = require('../errors/custom-error')

exports.errorHandlerMiddleware = (err,req,res,next) => {
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg: err.message})
    }
    console.log(err)
    // return res.status(500).json({msg:err}) 
    return res.status(err.status).json({msg:err.message})
}