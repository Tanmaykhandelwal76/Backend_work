

class CustomAPIError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCodemm
    }
}

const createCustomError = (msg, statusCode) => {
    return new CustomAPIError(msg,statusCode)
}

module.exports= {createCustomError, CustomAPIError}