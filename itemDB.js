const connectDB = require('./utils/db');
const User = require('./models/user-models');
const UserJson = require('./items.json')


const start = async () => {
    try {
        await connectDB("mongodb+srv://ashwinsathiya:Y3o8yHnvjXMfwHir@first.n1as9m8.mongodb.net/todo?retryWrites=true&w=majority")
        console.log("done");
        console.log(UserJson);
        await User.create(UserJson)

    } catch (error) {
        console.log(error);
    }
}

start()