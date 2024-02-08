const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type : String ,
        required : true
    },
    feed: {
        type: Object,
    }
})

const User = new mongoose.model("Item", userSchema);

module.exports = User