const mongoose = require('mongoose')
const Myschema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "please enter your name"],
        trim: true
    },

    salary: {
        type: Number,
        required: [true, "please enter your salary"],

    },

    department: {
        type: String,
        required: [true, "enter your department"]
    }

})


module.exports = mongoose.model('Userdata', Myschema);
