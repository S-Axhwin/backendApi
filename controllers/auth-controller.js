const User = require('../models/user-models')


const register = async (req, res) => {
    const {username, password} = req.body
    const Result = await User.find({username: username});
    if(Result.length===0){
        await User.create({username: username, password: password});

        res.json({registered: true})
    }else{
        res.json({registered: false, reason: "User name already exists"})
    }
};

const login = async (req, res) => {
    console.log({...req.body});
    res.json({...req.body});
};
const UpdataDaYaapa = async (_id, blog, Result)=>{
    const yaapa = await User.updateOne({_id },{ 
        $set: {
            feed: [...Result.feed, blog]
        }
    }
    )

}
const post = async (req, res) => {
    console.log(`hello ${req.body.username}`);
    const {username, password, blog} = {...req.body}
    if(username && password && blog){

        const Result = await User.findOne({username: username?username:""});
        console.log(Result);
        if(Result?.username == username && Result?.password == password){
            const id = Result?._id || ""
            UpdataDaYaapa(id, blog, Result)
            console.log('thinking update the db');
            //console.log('super bro well done');
            res.json({mes: true})
            
        }else{
            res.json({mes: false})
        }
    }else{
        res.json({mes: false})
    }
}

const logout = async (req, res) => {
    res.send("@ login")
    console.log("@logout");
    
};

const datas = async (req, res) => {
    console.log('came into');
    const form = await User.find();
    res.json(form)
}

module.exports = {
    register,
    login,
    logout,
    datas,
    post
};
