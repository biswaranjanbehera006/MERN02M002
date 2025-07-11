const express=require("express");
const { createUser } = require("../controller/user_controller");

const router=express.Router()

router.post("/user",createUserteUser);


module.exports=router
