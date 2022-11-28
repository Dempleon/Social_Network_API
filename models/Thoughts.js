const {Schema, model, Types} = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // use getter method to format the timestamp on query
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    }
)

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})

thoughtSchema.methods.getCreateDate = function () {
    console.log(`Todo: edit this getter function to format the date: ${this.createdAt}`);
}

const Thought = model('thought', thoughtSchema);

module.exports = Thought;