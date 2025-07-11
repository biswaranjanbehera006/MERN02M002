const mongoose=require("mongoose")


const connectDB= async ()=>{

    try{
        const connection=mongoose.connect("mongodb://127.0.0.1:27017/Mydatabase");
        console.log("mongo DB Connected Sucessfully");
        // userModel.insertOne({name:"Gobora",age:30,email:"gobora@gmail.com",password:"xyzgobi123"})
        
    //     const user=new userModel({
    //         name:"Biswa",
    //         age:22,
    //         email:"Biswa@gmail.com",
    //         password:"123"
    //     })
    //    await user.save()
       
       
    //     const data=await userModel.find();
    //     console.log(data);
        
        await userModel.findByIdAndUpdate(
            {_id:'686e19b7433a970b7c75c285'},
            {name: 'Biswaranjan',
            age: 23,
            email: 'Biswaranjan@gmail.com',
            password: 'Biswa@123'},
    )
    console.log("data updated");
    await userModel.findByIdAndDelete(
            {_id:'686e19b7433a970b7c75c285'})

              console.log("data deleted");
      
            //   console.log("data saved");
    }
    catch(error)
    {
        console.log('error : ',error);
        
    }
}


const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const userModel=mongoose.model("user",userSchema)
module.exports=userModel
module.exports=connectDB;