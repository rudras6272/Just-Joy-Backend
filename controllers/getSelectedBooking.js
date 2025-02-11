const Booking = require('../Models/booking') ;

const getSelectedBooking = async(req , res) =>{
    const {id} = req.params ; 

    try {
        const booking  = await Booking.findById(id) ;

        if(!booking){
            return res.status(404).json({message : 'Booking Does Not Exist'}) ;
        }
        res.status(200).json(booking) ; 
    } catch (error) {
        res.status(500).json({message : error.message}) ;
    }
}

module.exports = getSelectedBooking