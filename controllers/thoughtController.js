const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');


module.exports = {
    // controller to get all thoughts
    getAllThoughts(req, res) {
        Thought.find()
            .then((thoughts) => { res.json(thoughts) })
            .catch((err) => { res.status(500).json(err) });
    },

    // controller to get a single thought by _id
    getThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) => {
                if (!thought) {
                    res.status(404).json({ message: 'No thought found with that Id' })
                } else {
                    res.json(thought)
                }
            })
            .catch((err) => { res.status(500).json(err) })
    },

    // controller to create a new thought and update user
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: { thoughts: thought._id } },
                    { new: true }
                );
            })
            .then((user) => {
                if (!user) {
                    res.status(404).json({ message: 'Thought created but User not found' })
                } else {
                    res.json('Created thought')
                }
            })
            .catch((err) => { res.status(500).json(err) })
    },

    // controller to update thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) => {
                if (!thought) {
                    res.status(404).json({ message: 'No thought found with that Id' })
                } else {
                    res.json(thought);
                }
            })
            .catch((err) => { res.status(500).json(err) })
    },

    // controller to delete a thought by its _id
    removeThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) => {
                if (!thought) {
                    res.status(404).json({ message: 'No thought found with that Id' })
                } else {
                    return User.findOneAndUpdate(
                        { thoughts: req.params.thoughtId },
                        { $pull: { thoughts: req.params.thoughtId } },
                        { new: true }
                    )
                }
            })
            .then((user) => {
                if (!user) {
                    res.status(404).json({ message: 'Thought Deleted but no user with that id' })
                } else {
                    res.json({ message: 'Thought deleted' })
                }
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    // controller to add reaction to a thought
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: {reactionBody: req.body.reactionBody, username: req.body.username} } },
            { new: true }

        ).then((thought) => {
            if (!thought) {
                res.status(404).json({ message: 'No thought found with that Id' })
            } else {
                res.json(thought)
            }
        })
            .catch((err) => { res.status(500).json(err) })
    },

    // controller to pull and remove a reaction by reactionId
    removeReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { _id: req.params.reactionId } } },
            { new: true }
        )
            .then((thought) => {
                if (!thought) {
                    res.status(404).json({ message: 'No thought found with that Id' })
                } else {
                    res.json(thought)
                }
            })
            .catch((err) => { res.status(500).json(err) })
    }

}