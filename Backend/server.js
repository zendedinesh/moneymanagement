const express = require('express');
const dotenv = require('dotenv');
// const logger = require('./middleware/logger');
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const path = require('path');
const cookieParser = require('cookie-parser');

// Load env file
dotenv.config({ path: './config/.env' });

// Create database connection
connectDB();

// Load routes
const auth = require('./routes/auth');

const app = express();

// Add public as a static folder
app.use(express.static(path.join(__dirname, 'public')));//explain

// Adding json-parser
app.use(express.json());

// Custome middleware Logger
// app.use(logger);

// add morgan middleware
app.use(morgan('tiny')); //explain 


// add cookie parser
app.use(cookieParser());  //Explain

// add route
app.use('/api/v1/auth', auth);
// app.use('/api/v1/addexpense', auth)

// Add error middlewear
app.use(errorHandler);

const port = process.env.PORT || 9001;
const server = app.listen(port, () => {
    console.log('Server is started'.yellow);
});

// Handle unhandle rejection
process.on('unhandledRejection', (error, promise) => {
    console.log(`Error: ${error.message}`);
    // Close server with error code
    server.close(() => {
        process.exit(1);
    });
});
