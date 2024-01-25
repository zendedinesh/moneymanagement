const mongoose = require('mongoose')
const Addusersalary = new mongoose.Schema({
    MonthlySalary: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("Addusersmonthlysalary", Addusersalary)