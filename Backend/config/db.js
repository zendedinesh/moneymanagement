const mongoose = require('mongoose');
// explain this why we write async and await for mongodb connection we can also connect with our dataBase without using async and await 
const connectDB = async () => {
    console.log('connectDB goint to happen');
    const conn = await mongoose.connect(process.env.MONGO_URL, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log(`mongodb connected ${conn.connection.host}`.green.underline); 
    // console.log(conn)
}

module.exports = connectDB;





// Assuming you are using dotenv to load environment variables
// require('dotenv').config();

// const mongoose = require('mongoose');

// const connectDB = async () => {
//     console.log('connectDB going to happen');
    
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URL, { 
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         console.log(`MongoDB connected: ${conn.connection.host}`);
//     } catch (error) {
//         console.error(`MongoDB connection error: ${error.message}`);
//     }
// };

// module.exports = connectDB;
