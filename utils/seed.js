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
        const thought = getRandomThought();

        const username = getRandomUsername();

        const email = `${username}@email.com`

        users.push({
            username,
            email
        })
    }

    // add users to the collection
    await User.collection.insertMany(users);

    console.table(users);
    process.exit(0);
});