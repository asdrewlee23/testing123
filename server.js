require('dotenv').config()
const { config } = require('dotenv');
const express = require('express')
// express app
const app = express();

// middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})


//route
app.get('/',(req,res)=>{
    res.json({mssg:"Wellcome to the app!"})
});
//listen on request
app.listen(process.env.PORT,()=>{
    console.log("listen to port",process.env.PORT)
});