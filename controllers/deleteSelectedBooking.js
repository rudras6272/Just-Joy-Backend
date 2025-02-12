const Booking = require('../Models/booking') ; 

const deleteSelectedBooking = async(req , res) =>{
    const {id} = req.params ; 

    try {
        const deletedData = await Booking.findByIdAndDelete(id) ;  

        if(!deletedData){
            return res.status(404).json({message : "User Not Found"}) ;
        }
        res.status(200).json(deletedData) ; 
        
    } catch (error) {
        res.status(500).json({message : "Error Occured While Deleting Booking Data"}) ;
    }
}

module.exports = deleteSelectedBooking ; 