const postsModel = require('../models/postModel')

const mongoose = require('mongoose')


//async keyword indicates that the function contains asynchronous code and might 
//use await to pause execution until promises are resolved.

//Retrieve all Post
const getPosts = async (req, res) => {
    try {
        const posts = await postsModel.find()
        console.log(posts)
        res.status(200).json(posts)
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }



}

//Retrieve a single Post
const getPost = async (req, res) => {
    // destructure the req.body object to extract these properties.
    const { title, message, creator, tags, selectedFile, likeCount } = req.body

    // let emptyFields = []

    // if(!title){
    //     emptyFields.push('title')
    // }

    // if(!message){
    //     emptyFields.push('message')
    // }

    // if(!creator){
    //     emptyFields.push('creator')
    // }

    // if(!message){
    //     emptyFields.push('message')
    // }

    // if(!tags){
    //     emptyFields.push('tags')
    // }

    // // if(!selectedFile){
    // //     emptyFields.push('selectedFile')
    // // }


    // if(emptyFields.length > 0) {
    //     return res.status(400).json({
    //         error:"Please fill all the fields", emptyFields
    //     })
    // }

    try {
        const posts = await postsModel.create({ title, message, creator, tags, selectedFile, likeCount })
        // Respond with a 200 (OK) status code and the created workout as JSON.
        res.status(200).json(posts)
    }

    catch (error) {
        // If there is an error, respond with a 400 (Bad Request) status code and an error message as JSON.
        res.status(400).json({ error: error.message })
    }

}

//Create a single Post
const createPost = async (req, res) => {

}

//Delete a Post
const deletePost = async (req, res) => {

}

// Update a Post
const updatePost = async (req, res) => {

}

module.exports = {
    getPost,
    getPosts,
    createPost,
    deletePost,
    updatePost
}