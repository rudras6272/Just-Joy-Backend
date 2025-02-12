const express= require('express'); 
const addBooking = require('../controllers/addBooking');
const getBooking = require('../controllers/getBookings');
const getDashboardStats = require('../controllers/getDashboardStats');
const getSelectedBooking = require('../controllers/getSelectedBooking') ;
const updateSelectedBooking = require('../controllers/updateSelectedBooking');
const deleteSelectedBooking = require('../controllers/deleteSelectedBooking');
const router = express.Router() ; 

router.post('/api/booking' , addBooking) ; 
router.get('/api/bookings' , getBooking) ; 
router.get('/api/stats' , getDashboardStats); 
router.get('/api/selectedbooking/:id' , getSelectedBooking) ;
router.patch('/api/selectedbooking/:id' , updateSelectedBooking) ;
router.delete('/api/selectedbooking/:id' , deleteSelectedBooking) ; 

module.exports = router ; 
