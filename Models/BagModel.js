const mongoose=require("mongoose")
const bagSchema=mongoose.Schema({
    deviceToken:String,
    products:[{
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
        },
        quantity:Number
    }]
})
const Bag=mongoose.model('Bags',bagSchema)
module.exports=Bag