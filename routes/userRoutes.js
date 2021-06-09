const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/userModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");

const requireLogin = require("../middleware/auth");

router.post("/signup", (req, res) => {
  const {
    name,
    password,
    email,
    url,
    hobby,phone,profession,fbUrl,instraUrl,linkedinUrl
  } = req.body;
  if (!email || !password || !name) {
    return res.status(422).json({ error: "please add all the fields" });
  }
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "user already exists with that email" });
      }
      bcrypt.hash(password, 12).then((hashedpassword) => {
        const user = new User({
          email,
          password: hashedpassword,
          name,
         image : url,
         hobby,phone,profession,fbUrl,instraUrl,linkedinUrl
        });

        user
          .save()
          .then((user) => {
            res.json({ message: "saved successfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "please add email or password" });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "Invalid Email or password" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
        
          const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
          const { _id, name, email,  image,hobby,phone,profession,fbUrl,instraUrl,linkedinUrl} = savedUser;
          res.json({
            token,
            user: { _id, name, email,image,hobby,phone,profession,fbUrl,instraUrl,linkedinUrl },
          });
        } else {
          return res.status(422).json({ error: "Invalid Email or password" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.get("/profile", requireLogin, (req, res) => {
  User.find({ name: req.user.name })
  .select("-password")
  .then((admins) => {
    res.json(admins);
  })
  .catch((err) => {
    console.log(err);
  });
  });


module.exports = router;