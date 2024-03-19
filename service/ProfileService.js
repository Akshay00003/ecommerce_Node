const Profile=require('../Models/ProfileModel')

module.exports.Create=async(req,res)=>{
    try{
        const {userId,email,name,mobileNo}=req.body
        const response=await Profile.create({userId:userId,name:name,email:email,mobileNo:mobileNo})
        return res.json(response)
    }catch(error){
        return res.status(500).json({error:error.message})
    }
}
module.exports.GetSingleProfile=async(req,res)=>{
    try{
        const id=req.params.id
        const response=await Profile.find({userId:id})
        return res.json(response)
    }catch(error){
        return res.status(500).json({error:error.message})
    }
}