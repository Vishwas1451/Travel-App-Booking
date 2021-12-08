// const express = require('express');
// // // const bodyparser = require('body-parser');
// const path = require('path');
// // // const dotenv = require('dotenv');
// // // const morgan = require('morgan');

// const app = express();
// // // const connectDB = require('./connection')
// // // dotenv.config({path:'config.env'})
// const port = process.env.PORT ||3000;
// app.use(express.static('../../wb tech sem3 project'))
// app.set("view engine","html");
// app.get("/",(req,res)=>{
//     res.sendFile("../checkout.html",{root:__dirname});
// })

// app.listen(8080,()=>{
//     console.log(`server is running at port no ${port}`);
// })
const express = require('express');
const app = express()
const port = 3000
app.use(express.static('../wb tech sem3 project'))

app.set('view engine', 'html')

app.get('/', function(req,res) {
    res.sendFile('../addu_atoll.html', {root:__dirname})
});

app.listen(port,()=> {
    console.log("example listening in port 3000");
})

// //parse request to body parser
// // app.use(bodyparser.urlencoded({extended:true}))

// //set view engine
//  app.set("view engine","html")
// //app.set("views",path.resolve)

// app.get('/',(req,res)=>{
//     res.sendFile('../checkout.html', {root:__dirname})
// })

// app.listen(PORT, ()=>{console.log('Serveris running on http://localhost:8080')});
