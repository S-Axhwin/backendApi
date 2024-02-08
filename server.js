require("dotenv").config();
const express = require('express');
const app = express();
const connectDB = require('./utils/db');
const authRouter = require('./routes/auth-route')

app.use(express.json())
app.use('/api/auth', authRouter)

app.post('/', (req, res)=>{
    console.log(req.body);
    res.json({mes: "welcome bro"})
})

connectDB(process.env.MONGO_USER).then(()=>{
    app.listen(5001, ()=>{console.log('listening');})
})