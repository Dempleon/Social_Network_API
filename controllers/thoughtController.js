const {User, Thought} = require('../models');

module.exports = {
    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find()
            .then((thoughts) => {res.json(thoughts)})
            .catch((err) => {res.status(500).json(err)});
    },

    // get a single thought by _id
    getThought(req, res) {
        Thought.findOne({_id: req.params.thoughtId})
            .then((thought) => {
                if(!thought) {
                    res.status(404).json({message: 'No thought found with that Id'})
                } else {
                    res.json(thought)
                }
            })
            .catch((err) => {res.status(500).json(err)})
    },
}