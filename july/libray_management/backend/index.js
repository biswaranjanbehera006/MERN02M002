const express=require("express")
const env=require("dotenv");
const DBConnect = require("./config/DBConnect");
const routes = require("./routes/all.routes");
var cors = require('cors')


env.config();

const port=process.env.port;
// console.log(process.env.port);

const app=express();
app.use(cors());
app.use(express.json())


DBConnect();


app.get('/',(req,res)=>{
    res.send('Well come to Library management system backend');
})

app.use('/api',routes)

app.listen(port,()=>{
    console.log('backend is running on port',port);
    
})