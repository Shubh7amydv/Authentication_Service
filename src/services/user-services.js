const  UserRepository=require('../repository/user-repository');

const jwt=require('jsonwebtoken')
const {JWT_KEY}=require('../config/serverConfig')

class UserService{
    constructor(){
        this.userRepository= new UserRepository();
    }

    async createUser(data){
        try {
            const user=await this.userRepository.createUser(data);
            return user;
        } catch (error) {
            console.log("Error while creating user in UserService");
            throw error;
        }
    }
    async createToken(user){
        try {
            const result =jwt.sign(user,JWT_KEY,{expiresIn:'1h'});
            return result;
        } catch (error) {
            console.log("Something  went wrong in token creation");
            throw error;
        }
    }


    async verifyToken(token){
        try {
            const response=jwt.verify(token,JWT_KEY);
            return response;
            
        } catch (error) {
            console.log("Error went wrong in token validation");
            throw error;  
        }
    }
        

}

module.exports=UserService;
















// classes and constructor ==> pascal case
// function,varibales,methods,object properties===> camelc case
// Dont import like below---- 
// const  { UserRepository }=require('../repository/user-repository');