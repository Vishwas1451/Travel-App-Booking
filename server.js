const express = require('express');
const app = express()
var url = require('url');
const port = 3000
require("./connection");
const {Register,Register1} = require('./cregisters');
// const Register1 = require('./cregisters2');
app.use(express.static('../wb tech sem3 project'))

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'html')

app.get('/', function(req,res) {
    res.sendFile('./travmora_home.html', {root:__dirname})
});



app.get('/register', function(req,res) {
    res.sendFile('./register.html', {root:__dirname})
});
app.get('/register2', function(req,res) {
    res.sendFile('./register2.html', {root:__dirname})
});



app.post("/register2.html", async (req,res) =>{
    try{
     
        const registerEmployee1 = new Register1({
            
            going_date:req.body.going_date
        })
       const registered1 = await registerEmployee1.save();
       res.status(201).sendFile("./checkout.html", {root:__dirname});

    }catch (err) {
        res.status(400).send(err);
    }
})
app.post("/register.html", async (req,res) =>{
    try{
        
        const registerEmployee = new Register({
            firstname: req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            mobile:req.body.mobile,
            booking_date:req.body.booking_date,
            cardnumber:req.body.cardnumber,
            expiry:req.body.expiry,
            cvv:req.body.cvv,
            
           
        })
       const registered = await registerEmployee.save();
       res.status(201).sendFile("./travmora_thank.html", {root:__dirname});

    }catch (err) {
        res.status(400).send(err);
    }
})



app.listen(port,()=> {
    console.log("example listening in port 3000");
})