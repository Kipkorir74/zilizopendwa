// imports the Mongoose library and makes it available for use
const mongoose  = require('mongoose')

// creates a reference to the Schema constructor provided by Mongoose. The schema defines the structure and properties of documents stored in MongoDB collection
const Schema = mongoose.Schema;


const postSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    message:{
        type:String,
        required:true
    },
    creator:{
        type: String,
        required:true
    },
    tags:{
        type:[String],
        // required:true
    },
    selectedFile:{
        type:String
    },
    likeCount: {
        type: Number,
        default:0
    }
}, {timestamps:true})

module.exports = mongoose.model('Posts', postSchema)