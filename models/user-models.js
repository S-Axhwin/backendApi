const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String ,
        require: true
    },
    feed: {
        type: Object,
    }
})

const User = new mongoose.model("Item", userSchema);

module.exports = User