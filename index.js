const express = require('express') ;
const bookingRoutes = require('./Routes/bookingRoutes') ; 
const connectDB = require('./DB/dbconnect') ;
const cors = require('cors') ; 

const app = express() ; 
require('dotenv').config({path : './.env'}) ; 

const PORT = process.env.PORT || 5000 ; 
app.use(express.json()) ; 
app.use(
    cors({
      origin: true,
      optionsSuccessStatus: 200,
      credentials: true,
    })
  );
  app.options(
    '*',
    cors({
      origin: true,
      optionsSuccessStatus: 200,
      credentials: true,
    })
  );
connectDB() ; 

//Routes
app.use('/' , bookingRoutes) ; // Base path for all routes in bookingRoutes.js 
app.listen(PORT , () =>{
    console.log(`Server is running on port ${PORT}`) ; 
})
