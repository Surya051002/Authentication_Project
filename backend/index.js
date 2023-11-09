const express = require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const schema=require('./Schema');

const app=express();
app.use(cors());

app.use(express.json());

mongoose.connect("mongodb+srv://suryaprakash:123@cluster0.5ifyday.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    return console.log("db connected");
}).catch((err)=>{
    return console.error(err);
})

app.post('/login',async (req,res)=>{
    try{
    console.log("working",req.body);
    const data= await schema.findOne({"Email":req.body.email});
    console.log(data)
    if(data && data.Pass===req.body.pass){
        res.status(200).send({message:"your are loged in success"});
    }
    else{
        res.status(200).send({ message: "Invalid email or password" });
    }
}
catch(error){
    console.error(error);
  res.status(500).send({ message: "Internal server error" });
}

});

app.post('/register',async (req,res)=>{
    console.log("working",req.body);
    const check= await schema.findOne({"Email":req.body.email});
    if(check){
        res.status(200).send({message:"User already found"});
        return;
    }
    const data= await schema.create({"Email":req.body.email,"Pass":req.body.pass});
    console.log(data);
    if(data){
        res.status(200).send({message:"your are registration success"});
    }
    else{
        res.status(200).send({message:"User already found"});
    }

});

app.listen(3500,()=>{
    console.log("server runing on 3500");
});