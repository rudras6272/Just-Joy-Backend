const express= require('express'); 
const addBooking = require('../controllers/addBooking');
const getBooking = require('../controllers/getBookings');
const router = express.Router() ; 

router.post('/api/booking' , addBooking) ; 
router.get('/api/bookings' , getBooking) ; 

module.exports = router ; 
