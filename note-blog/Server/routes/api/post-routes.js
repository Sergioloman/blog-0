const router = reqiore('express').Router()

const {
    getPost,
    getSinglePost,
    createNewPost,
    updatePost,
    deletePost    
} = require('../../Controllers/post-controller')

router.route('/').get(getPost).post(createNewPost)
router.route('/:postId').get(getSinglePost).put(updatePost).delete(deletePost)

module.exports = router