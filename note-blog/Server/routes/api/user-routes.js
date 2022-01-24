const router  = require('express').Router()

const { 
    getUsers,
    getSingleUser,
    createNewUser,
    updateUser,
    deleteUser,

} =  require('../../Controllers/user-controllers.js');

router.route('/').get(getUsers).post(createNewUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser)

module.exports = router