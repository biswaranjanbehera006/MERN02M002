const express=require("express");
const connectDB = require("./db");
const app=express()
const router=express.Router()
const port=8000;

//connection methord start
connectDB();


const validatation=(req,res,next)=>{
    console.log('validataion start');
    next();  
}

const auth=(req,res,next)=>{
    console.log('authntication start');
    next()
    
}

// app.use(validatation)
// app.use(auth)
// app.get('/',(req,res)=>{
//        res.send('get methord callled')

// })

// app.post("/user",(req,res)=>{
//     res.send('post methord called ')
// })

app.use('/api',router)

router.get('/',validatation,auth,(req,res)=>{
    res.send("get methord called in routing")
})

router.post('/user',auth,(req,res)=>{
    res.send("post methord called in routing")
})




app.listen(port,(req,res)=>{
console.log("the server is running on the port number 8000");

})