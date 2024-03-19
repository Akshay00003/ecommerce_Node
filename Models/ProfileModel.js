const mongoose =require("mongoose")
const User =require('./UserModel')

const profileSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,ref:User
    },
    name:{
        type:String
    },
    email:{
        type:String
    },
    mobileNo:{
        type:Number
    }
},{timestamps:true})

const profile=mongoose.model("Profile",profileSchema)
module.exports=profile