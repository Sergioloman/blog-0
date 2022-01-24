const router = require('express').Router()

const {
    getPosts,
    getSinglePost,
    createNewPost,
    updatePost,
    deletePost    
} = require('../../Controllers/post-controller.js')

router.route('/').get(getPosts).post(createNewPost)
router.route('/:postId').get(getSinglePost).put(updatePost).delete(deletePost)

module.exports = router