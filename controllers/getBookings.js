const Booking = require('../Models/booking') ; 

const getBooking =  async(req,res) =>{
    try {
        const bookings = await Booking.find({}) ; 
        res.status(200).json(bookings) ; 
        
    } catch (error) {
        res.status(500).json({message : error.message}) ; 
    }
}

module.exports = getBooking ; 