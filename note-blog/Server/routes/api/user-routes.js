const router  = require('express').Router()

const { 
    getUsers,
    getSingleUser,
    createNewUser,
    updateUser,
    deleteUser,

} =  require('../../controllers/user-controller');

router.route('/').get(getUsers).post(createNewUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser)

module.exports = router