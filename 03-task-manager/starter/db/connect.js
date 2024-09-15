const mongoose = require('mongoose')



const connectDB = (url) => {
    return mongoose.connect(url, {   //if using v6 then do not need to use this all written below
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB

// .then(() =>console.log('connected to the db..'))
// .catch((err)=>console.log(err))