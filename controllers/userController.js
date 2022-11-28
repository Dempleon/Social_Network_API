const {ObjectId} = require('mongoose').Types;
const {User, Thought} = require('../models');



module.exports = {
    // get all users
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

    // get single user with thoughts and friend data
    // todo: get the thoughts and friends data, might have to use aggregate function
    getUser(req, res) {
        User.findOne({_id: req.params.userId})
        .select('-__v')
        .then(async (user) => {
            !user
                ? res.status(404).json({message: 'No user found with that ID'})
                : res.json({
                    user,
                })
        })
    },

    // user post route
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(student))
            .catch((err) => res.status(500).json(err));
    },

    
}