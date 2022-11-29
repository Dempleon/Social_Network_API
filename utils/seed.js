const connection = require('../config/connection');
const { getAllThoughts } = require('../controllers/thoughtController');
const {User, Thought, Reaction} = require('../models');
const {
    getRandomReaction,
    getRandomThought,
    getRandomUsername
} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // drop users if exists
    await User.deleteMany({});

    // drop thoughts if exists
    await Thought.deleteMany({});

    // empty array for users
    const users = [];

    // create 20 users
    for(let i = 0; i < 20; i++) {
        
    }
})