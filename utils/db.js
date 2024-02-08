const mongoose = require('mongoose');


const connectDB = async (URI) =>{
    try {
        await mongoose.connect(URI)
        console.log('connect to db i have done 5000 time on 5000 port');
    } catch (error) {
        console.log(error);
        console.error('this is not the correct way');
        process.exit(0);
    }
}
//mongoose.connect(URI)
module.exports = connectDB