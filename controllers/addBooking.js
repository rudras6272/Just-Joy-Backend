const axios = require('axios')  ;
const Booking  = require('../Models/booking') ; 


const addBooking = async(req , res) =>{
    const {checkIn , checkOut , adults , children} = req.body ; 
    try {
        const newBooking = await Booking.create({
            checkIn , 
            checkOut , 
            adults , 
            children
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