const Booking = require('../Models/booking');

const getDashboardStats = async(req , res) =>{
    try {
        const totalBookings = await Booking.countDocuments();
        today.setHours(0, 0, 0, 0);

        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        const todayBookings = await Booking.countDocuments({
          createdAt: { $gte: today, $lt: tomorrow }
        });

        res.status(200).json({
          totalBookings,
          todayBookings
        });
        
    } catch (error) {
        res.status(500).json({message : error.message}) ;
    }
}

module.exports = getDashboardStats ;