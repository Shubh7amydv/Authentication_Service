
const express=require('express');
const router=express.Router();


const userControllers=require("../../controllers/user-controllers");

router.post('/user', userControllers.createUser);

module.exports=router;