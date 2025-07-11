const http=require("http");

const myserver=http.createServer((req,res)=>{
    console.log('Server is running on port 8000')
    console.log(req.url);
    
    res.end("response send");
})

myserver.listen(8000)
