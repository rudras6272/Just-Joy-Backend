const mongoose = require('mongoose') ; 

const bookingSchema = new mongoose.Schema({
    name : {
        type : String , 
        required : true 
    },
    email : {
        type : String , 
        required : true 
    },
    checkIn : {
        type : Date , 
        required : true ,
    }, 
    checkOut : {
        type : Date , 
        required : true 
    } ,
    adults : {
        type : Number , 
        required : true , 
    },
    children : {
        type : Number
    }
})

const Book = mongoose.model('newBooking' , bookingSchema) ; 
module.exports = Book ; 