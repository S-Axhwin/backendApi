require("dotenv").config();
const express = require('express');
const app = express();
const connectDB = require('./utils/db');
const authRouter = require('./routes/auth-route')

app.use(express.json())
app.use('/api/auth', authRouter)

app.post('/api', (req, res)=>{
    console.log(req.body);
    res.json({...req.body})
})

connectDB(process.env.MONGO_USER).then(()=>{
    app.listen(5001, ()=>{console.log('listening');})
})