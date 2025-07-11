const mongoose=require("mongoose");

const connectionDB=async()=>{
    try{
      const connection= await mongoose.connect(" mongodb://127.0.0.1:27017/")
        console.log('data base connected ');
        
    }catch(err){
        console.log('error is ',err);
        
    }
}

module.exports=connectionDB