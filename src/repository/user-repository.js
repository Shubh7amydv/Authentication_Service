const { User }=require('../models/index');

class UserRepository {

   async createUser(data){
        try {
            const user=await User.create(data);
            return user;
        } catch (error) {
            console.log("Error while creating user in UserRepository");
            throw error;
        }
   }
   
}

module.exports=UserRepository;