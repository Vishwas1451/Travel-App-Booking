const mongoose = require("mongoose")

const employeeSchema1 = new mongoose.Schema({
 
going_date: {
    type:String,
    required:true,
}
})

const Register1 = new mongoose.model("Register1", employeeSchema1);

module.exports = Register1;