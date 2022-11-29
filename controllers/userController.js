const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

//todo: aggregate functions

module.exports = {
    // controller to get all users
    getAllUsers(req, res) {
        User.find()
            .then(async (users) => {
                const userOjb = {
                    users,
                };
                return res.json(userOjb);
            })
            .catch((err) => {
                console.log(err)
                return res.status(500).json(err);
            });
    },

    // controller to get single user with thoughts and friend data
    // todo: get the thoughts and friends data, might have to use aggregate function
    getUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then(async (user) => {
                if (!user) {
                    res.status(404).json({ message: 'User not found' })
                } else {
                    res.json({ user })
                }
            })
    },

    // controller for user post 
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(student))
            .catch((err) => res.status(500).json(err));
    },

    // controller to remove single user
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
            .then((user) => {
                if (!user) {
                    res.status(404).json({ message: 'User not found' })
                } else {
                    //todo: delete associated thoughts when user is deleted
                }
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // controller to update single user
    updateUser(req, res) {
        User.findOneAndUpdate({_id: req.params.userId})
            .then((user) => {
                if(!user){
                    res.status(404).json({message: 'User not found'})
                } else {
                    // todo: update associated thoughts
                }
            })
            .catch((err) => {
                res.status(500).json(err)
            });
    },

    // controller to add a new friend to the users friend list
    addFriend(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$addToSet: {friends: req.body}},
            {runValidators: true, new: true}
        )
            .then((user) => {
                if(!user) {
                    res.status(404).json({message: 'User not found'})
                } else {
                    res.json(user)
                }
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    // controller to remove a user from the friends array
    removeFriend(req, res) {
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$pull: {friends: {userId: req.params.friendsId}}},
            {runValidators: true, new: true}
        )
            .then((user) => {
                if(!user) {
                    res.status(404).json({message: 'User not found'});
                } else {
                    res.json(student)
                }
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}