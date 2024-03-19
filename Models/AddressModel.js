const mongoose=require("mongoose")
const User=require("./UserModel")

const addressSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,ref:User
    },
    address:{
        type:String
    }
},{timestamps:true})

const Address=mongoose.model("address",addressSchema)
module.exports=Address