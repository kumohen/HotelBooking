
const express  = require('express')
const  mongoose  = require('mongoose')
const { MONGO_URI } = require("./keys");
const userRoutes = require('./routes/userRoutes')
const hostelRoutes = require('./routes/hostel')
const orderRoutes = require('./routes/orderRoute')

const app = express()
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex:true
});
mongoose.connection.on("connected", () => {
  console.log("mongodb is connected");
});


app.use(express.json())


app.use('/api/users', userRoutes)
app.use('/api/hostels', hostelRoutes)
app.use('/api/orders', orderRoutes)




const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    "it is working ..."
  )
)
