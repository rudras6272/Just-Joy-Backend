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
    },
    totalAmount : {
        type : Number
    },
    status : {
        type : String ,
        enum : ['Pending' , 'Confirmed' , 'Cancelled'],
        default : 'Pending'
    }
})

const Book = mongoose.model('newBooking' , bookingSchema) ; 
module.exports = Book ; 