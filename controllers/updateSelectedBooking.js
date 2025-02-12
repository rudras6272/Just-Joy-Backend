const Booking = require('../Models/booking') ;

const updateSelectedBooking = async(req , res) =>{
    const {id} = req.params ; 
    const updates = req.body ; 
    try {
        const updatedItem = await Booking.findByIdAndUpdate(id , updates) ; 

        if(!updatedItem){
            return res.status(404).json({message : "User Not Found"}) ;
        }
        res.status(200).json(updatedItem) ;
    } catch (error) {
        res.status(500).json({message : "Error Occured While Updating the Booking data"}) ;
    } 
}

module.exports = updateSelectedBooking ; 