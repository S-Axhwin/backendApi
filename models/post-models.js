const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    feed: {
        type: String,
        required: true,
    }
})

const Post = new mongoose.model("post", PostSchema);

module.exports = Post