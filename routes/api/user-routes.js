const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUser)
    .post(createUser);


router
    .route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)
    .post(addFriend);


router
    .route('/:userId/:friendId')
    .delete(removeFriend);


module.exports = router;