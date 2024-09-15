const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notfound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
//middleware
app.use(express.static('./public'))
app.use(express.json())


//routes
// app.get('/hello',(req,res) => {
//     res.send('Task Manager App')
// })

app.use('/api/v1/tasks',tasks) 
app.use(notfound.notfound) 
app.use(errorHandlerMiddleware.errorHandlerMiddleware)

const port = 3000

const start = async () => {
    try{                                  //aise isliye kiya hai kyuki database connect hona server listen krne se pehle hona chaiye
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch(error){
        console.log(error)
    }
}

start()
