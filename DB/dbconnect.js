const mongoose = require('mongoose') ; 

const connectDB = async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`) ;
        console.log(`Connected to Database ${connectionInstance.connection.host}`)  ;
        
    } catch (error) {
        console.error("Error occured While Connecting to Database" , error) ; 
        process.exit(1);
    }
}

module.exports = connectDB ; 