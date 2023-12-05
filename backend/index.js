
const bodyParser = require('body-parser')

const mongoose = require('mongoose')

const express = require('express')

var cors = require('cors')

require("dotenv").config()

const PostRoutes = require('./routes/postsRoutes') 

//initialize the express app
const app = express();

// app.use(bodyParser.json({ limit: '30mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

// Registers middleware using app.use(). It tells Express to parse incoming JSON data from HTTP requests. This middleware is crucial for handling JSON data sent in the request body.
app.use(express.json())

// Logs information about incoming requests. Logs the path and HTTP method of each request and then calls next() to pass control to the next middleware in the chain.
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(cors())

app.use('/api/posts', PostRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests 
        app.listen(process.env.PORT, () => {
            console.log("Connected to mongoDb and Listening to port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

    // mongoose.set('useFindAndModify', false);
