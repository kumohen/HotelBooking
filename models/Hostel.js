const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const hostelSchema = new mongoose.Schema({
  name: {
    type: String,
   
  },
  description: {
    type: String,
    
  },
  price: {
    type: Number,
   
  },
  status: {
    type: Number,
   
  },
  location: {
    type: String,
  },
  image: 
    {
      type: String,
    },
  images:[],
  amenities:{
    type:Object
  },
  reviews: [
    {
      text: Number,
      postedBy: { type: ObjectId, ref: "User" },
    },
  ],
  comments: [
    {
      text: String,
      comentor:String ,
      comentorPic:String,
      createdAt: {type: Date, default: Date.now},
      postedBy: { type: ObjectId, ref: "User" },
    },
  ],
  postedBy: {
    type: ObjectId,
    ref: "User",
  }
 

});

module.exports = mongoose.model('Hostel', hostelSchema)