const express= require('express'); 
const addBooking = require('../controllers/addBooking');
const getBooking = require('../controllers/getBookings');
const getDashboardStats = require('../controllers/getDashboardStats');
const router = express.Router() ; 

router.post('/api/booking' , addBooking) ; 
router.get('/api/bookings' , getBooking) ; 
router.get('/api/stats' , getDashboardStats); 

module.exports = router ; 
