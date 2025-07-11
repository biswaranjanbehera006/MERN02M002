const express=require("express")
const dotenv=require("dotenv");
const connectionDB = require("./DBConnection/db");
const router = require("./routes/router");

dotenv.config()

const app=express();

const port=process.env.port;


connectionDB()
app.use(express.json())

app.use('/api',router)





app.listen(port,(req,res)=>{
    console.log('my server is running on port number ',port);

})



