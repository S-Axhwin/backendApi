const mongoose = require('mongoose');

const URI = "mongodb+srv://ashwinsathiya:Y3o8yHnvjXMfwHir@first.n1as9m8.mongodb.net/todo?retryWrites=true&w=majority"

const connectDB = async () =>{
    try {
        await mongoose.connect(URI)
        console.log('connect to db');
    } catch (error) {
        console.log(error);
        console.error('this is not the correct way');
        process.exit(0);
    }
}
//mongoose.connect(URI)
module.exports = connectDB