const  mongoose  = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String
     
    },
    hobby:{
      type: String
    },
    profession:{
      type: String
    },
    phone:{
      type: String
    },
    fbUrl:{
      type: String
    },
    instraUrl:{
      type: String,
    },
    linkedinUrl:{
      type: String
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)



module.exports = mongoose.model('User', userSchema)

