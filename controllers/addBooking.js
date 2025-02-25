const axios = require('axios')  ;
const Booking  = require('../Models/booking') ; 


const addBooking = async(req , res) =>{
    const {name , email , checkIn , checkOut , guests , message , phone , totalAmount} = req.body ; 
    try {
        const newBooking = await Booking.create({
            name ,
            email ,
            checkIn , 
            checkOut , 
            guests, 
            message , 
            phone , 
            totalAmount 
        }) ; 
        console.log("New Booking Created" , newBooking) ;
        res.status(201).json({
            message: "New Booking Created",
            booking: newBooking
        }) ; 
    } catch (error) {
        console.log("Error Occured While Creating Booking" , error) ;
        res.status(500).json(() =>{
            message: "Error Occurred While Creating Booking"
        }) ; 
    }
    
}

module.exports = addBooking ; 