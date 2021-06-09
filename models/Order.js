const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    name:{type:String,require},
    email:{type:String,require},
    userId:{type:String,require},
    hostelId:{type:String},
    booking: {type:Number},
    shippingAddress:{type:Object},
    orderAmount:{type:Number,require},
    transactionId:{type:String,require}
},{
    timestamps:true
})


module.exports = mongoose.model('orders',orderSchema) ;