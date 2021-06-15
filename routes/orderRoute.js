const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');

const stripe = require("stripe")("sk_YFnJhO00xkvOMvro")
const Order = require("../models/Order");

router.post("/placeorder",async(req,res)=>{
    const {token,amount,currentUser,hostelId,booking} = req.body ;
     try {
     const customer = await   stripe.customers.create({
            email: token.email,
            source:token.id
          })
          const payment = await   stripe.charges.create({
             amount:amount*100 ,
             currency:'inr',
             customer:customer.id,
             receipt_email:token.email
          },{
            idempotencyKey:uuidv4()
          })
         if(payment){
         
           const newOrder = new Order({
             name:currentUser.user.name ,
             email:currentUser.user.email ,
             userId:currentUser.user._id ,
             booking:booking ,
             hostelId:hostelId ,
             shippingAddress:{
               street:token.card.address_line1,
               city:token.card.address_city ,
               country:token.card.address_country,
               pincode:  token.card.address_zip
             },
             orderAmount:amount,
          
             transactionId:payment.source.id
           })
          // console.log(newOrder)
           newOrder.save();
             res.send("payment done")
         } else {
             res.send("payment fail")
         }

     } catch (error) {
        return res.status(400).json({message:error})
     }
})


router.get('/order/:id',(req,res)=>{
    
    Order.find({hostelId:req.params.id})
  
    .then(post=>{
        res.json(post)
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get("/getUsersOrder/:userId",async(req,res)=>{
  const {userId} = req.params ;
  
   try {
   const orders =  await Order.find({userId}).sort({_id:-1});
   res.json(orders);

   } catch (error) {
      return res.status(400).json({message:error})
   }
})

module.exports = router ;
