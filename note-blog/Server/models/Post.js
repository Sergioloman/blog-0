const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateGetter')


const PostSchema = new Schema(
    {
        postText: {
            type: String,
            required: [true, "Write Something darn it!"],
            minlength: 1,
            maxlength: 9999,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username:{
            type: String,
            required: true,
        }

    },
    {
        toJSON: {
            getters: true,
        },
        // prevents virtuals from creating duplicate of _id as `id`
        id: false,
    }
);

const Post = model("Post", PostSchema)

module.exports = Post;