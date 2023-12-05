import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'
//initialize the express app
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use(cors())


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
