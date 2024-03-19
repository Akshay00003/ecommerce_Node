const Bag=require('../Models/BagModel')

module.exports.AddBag=async(req,res)=>{
    const {userToken,productId,quantity}=req.body
    console.log(userToken,productId);
    try{
        let bag=await Bag.findOne({userToken})
        if(!bag){
            bag=new Bag({userToken,products:[]})
        }
        const existingProductIndex=bag.products.findIndex(product=>product.productId===productId)
        if(existingProductIndex!==-1){
            bag.products[existingProductIndex].quantity+=quantity
        }else{
            bag.products.push({productId,quantity})
        }
        await bag.save()
        res.status(201).json(bag)
    }catch(err){
        console.log(err)
        res.status(500).send('server error')
    }
}