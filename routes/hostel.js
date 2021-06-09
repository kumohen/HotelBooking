const express = require("express");
const router = express.Router();
const requireLogin = require("../middleware/auth");
const Hostel = require("../models/Hostel");

router.get("/allHostel", (req, res) => {
    Hostel.find()
      .sort({ date: -1 })
      
  
      .then((posts) => {
        res.json(posts);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  router.get('/hostel/:id',(req,res)=>{
    
    Hostel.findById(req.params.id)
  
    .then(post=>{
        res.json(post)
    })
    .catch(err=>{
        console.log(err)
    })
})

router.put("/comment/:id", requireLogin, (req, res) => {
  const comment = {
    text: req.body.text,
    postedBy: req.user._id,
    comentor:req.user.name,
    comentorPic:req.user.image
  };
 
  Hostel.findByIdAndUpdate(
    req.params.id,
    {
      $push: { comments: comment },
    },
    {
      new: true,
    }
  )
    .populate("comments.postedBy", "_id name  ")
    .populate("postedBy", "_id name ")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
         
      }
    });
 
});

router.put("/review/:id", requireLogin, (req, res) => {
  const review = {
    text: req.body.text,
    postedBy: req.user._id,
  };
  Hostel.findByIdAndUpdate(
    req.params.id,
    {
      $push: { reviews: review },
    },
    {
      new: true,
    }
  )
    .populate("reviews.postedBy", "_id name ")
    .populate("postedBy", "_id name ")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
        
      }
    });
});

module.exports = router;