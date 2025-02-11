const Booking = require('../Models/booking');

const getDashboardStats = async(req , res) =>{
    try {
        const totalBookings = await Booking.countDocuments();
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        const todayBookings = await Booking.countDocuments({
          createdAt: { $gte: today, $lt: tomorrow }
        });

        const pendingBookings = await Booking.countDocuments({
          status : 'Pending' 
        });

        const confirmedBookings = await Booking.countDocuments({
          status : 'Confirmed'
        }) ;

        res.status(200).json({
          totalBookings,
          todayBookings,
          pendingBookings,
          confirmedBookings,
        });

    } catch (error) {
        res.status(500).json({message : error.message}) ;
    }
}

module.exports = getDashboardStats ;