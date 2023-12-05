const express = require('express')
const{getPosts, getPost, createPost, deletePost, updatePost}= require('../controllers/postsController')

// const requireAuth = require('../middleware/requireAuth')


const router = express.Router()

//require auth for all workout routes

// router.use(requireAuth)

//retrive all workouts
router.get('/', getPosts)

// retrieve a single workout
router.get('/:id', getPost)

//add a new workout
router.post('/', createPost)

//delete a workout
router.delete('/:id', deletePost)

//Update a workout
router.patch('/:id', updatePost)



module.exports = router