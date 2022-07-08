require('dotenv').config()
const express = require('express')
// express app
const app = express();

//middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method)
})



//route
app.get('/',(req,res)=>{
    res.json({mssg:"Wellcome to the app!"})
});
//listen on request
app.listen(process.env.PORT,()=>{
    console.log("listen to port 4000!!!!")
});