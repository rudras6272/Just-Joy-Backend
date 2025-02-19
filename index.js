const express = require('express') ;
const bookingRoutes = require('./Routes/bookingRoutes') ; 
const connectDB = require('./DB/dbconnect') ;
const cors = require('cors') ; 

const app = express() ; 
require('dotenv').config({path : './.env'}) ; 
import { injectSpeedInsights } from '@vercel/speed-insights';
 
injectSpeedInsights();

const PORT = process.env.PORT || 5000 ; 
app.use(express.json()) ; 
app.use(cors()) ; 

connectDB() ; 

//Routes
app.use('/' , bookingRoutes) ; // Base path for all routes in bookingRoutes.js 
app.listen(PORT , () =>{
    console.log(`Server is running on port ${PORT}`) ; 
})
