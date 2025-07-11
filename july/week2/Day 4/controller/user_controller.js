import { userModel } from "../models/user_model";


export const createUser=async(req,res)=>{

    try{
   
    const  {name,age,email,password}=req.body;
    // console.log(dataBody);

    const user=new userModel({name,age,email,password});

    await user.save();
    res.send("data Saved");

     }catch(err){
        console.log(err);
        
     }
    
}