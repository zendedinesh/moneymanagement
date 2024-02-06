const mongoose = require('mongoose')
const MyAddress = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "enter your name"],
        trim: true
    },

    address: {
        type: String,
        required: [true, "enter your addresss"]
    },

    amount:{
        type:Number,
     
    }
})

module.exports = mongoose.model("useraddress", MyAddress)