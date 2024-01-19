const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const AddexpenseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming there is a User model for the userId reference
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    ExpenseDate: {
        type: String,
        required: true,
    },
    ExpenseAmount: {
        type: Number,
        required: true,
    },
    Categories: {
        type: String,
        required: true,
    },
})
module.exports = mongoose.model('addSchema', AddexpenseSchema)

// models/AddSchema.js

