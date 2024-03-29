require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors')
const connectDB = require('./utils/db');
const authRouter = require('./routes/auth-route')
app.use(express.json())
app.use(cors())
app.use('/api/auth', authRouter)
app.post('/', (req, res)=>{
    console.log(req.body);
    res.json({mes: "welcome bro"})
})

connectDB(process.env.MONGO_USER).then(()=>{
    const PORT = process.env.PORT||5001
    app.listen( PORT, ()=>{console.log(`listening @ ${PORT}`);})
})