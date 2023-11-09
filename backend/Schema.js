const mongoose=require("mongoose");

const schema = mongoose.Schema({
    Email:{
        type:"String",
        required:true,
    },
    Pass:{
        type:"String",
    }
})

module.exports=mongoose.model("schemamodel",schema);