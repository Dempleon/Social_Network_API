const { Schema, Types, Model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // user getter method to format the timestamp on query
        }
    }
)

reactionSchema.methods.getCreateDate = function () {
    console.log(`Todo: edit this getter function to format the date: ${this.createdAt}`);
}

module.exports = reactionSchema;