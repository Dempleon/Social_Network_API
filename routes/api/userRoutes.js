const router = require('express').Router();
const {
    getAllUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');


// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId
router.route('/:userId')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').put(removeFriend);

// /api/users/:userId/friends
router.route('/:userId/friends').put(addFriend);

module.exports = router;