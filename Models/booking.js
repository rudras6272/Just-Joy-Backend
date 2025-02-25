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
    totalAmount : {
        type : Number
    },
    status : {
        type : String ,
        enum : ['Pending' , 'Confirmed' , 'Cancelled'],
        default : 'Pending'
    },
    message : {
        type : String 
    },
    guests: {
        type : String , 
        required : true
    }
} , {timestamps : true})

const Book = mongoose.model('newBooking' , bookingSchema) ; 
module.exports = Book ; 