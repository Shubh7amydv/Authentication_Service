
const express=require('express');
const router=express.Router();


const userControllers=require("../../controllers/user-controllers");

router.post('/signup', userControllers.createUser);

router.post('/signin',userControllers.signIn);

module.exports=router;