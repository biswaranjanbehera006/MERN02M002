//this is for import the express
const express=require("express");

//this is for creating the application
const app=express();
app.use(express.json())


//user defined  middle ware
const validation=(req,res,next)=>
{
    console.log("validation ho raha hai");
    next()
    
}
app.use(validation)
 // port nuumber
const port=8000;

//get request
app.get('/',(req,res)=>{
    const{q,s}=req.query;
    console.log(q);
    console.log(s);
    console.log("get methord called");
    res.send("<h1>get request called</h1>"); 
})



//this is post methord
app.post('/user',(req,res)=>{
    const data=req.body;
    console.log(data);
    // res.send(data)
    res.status(200).json(data)
})

//this is put methord
app.put('/user/:id',(req,res)=>{
    res.send("put resquest called");
})


//this is delete request 
app.delete('/user/:id',(req,res)=>{
    const {id}=req.params;
    console.log("ID is ",id);
    res.send(' delete request called')
})

//this is for running the server
app.listen(port,(req,res)=>{
    console.log("my server is running on port no" ,port);
})

