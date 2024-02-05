const mongoose = require('mongoose')
const Addusersalary = new mongoose.Schema({
    monthlySalary: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("Addusersalary", Addusersalary)