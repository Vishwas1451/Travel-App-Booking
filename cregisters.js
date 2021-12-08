const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
 firstname : {
     type:String,
    
 },
 lastname : {
    type:String,
    
},
email : {
    type:String,
   
    
},
mobile : {
    type:Number,
    
    
},
booking_date : {
    type:String,
    
    
},
cardnumber : {
    type:String,
    
    
},
expiry : {
    type:String,
    
   
},
cvv: {
    type:String,
    
    
},
going_date: {
    type:String,
    
}
})
const employeeSchema1 = new mongoose.Schema({
 
    going_date: {
        type:String,
        required:true,
    }
    })
    
const Register1 = new mongoose.model("Register", employeeSchema1);

const Register = new mongoose.model("Register", employeeSchema);

module.exports = {Register,Register1};