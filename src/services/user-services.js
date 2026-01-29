const  UserRepository=require('../repository/user-repository');

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
}

module.exports=UserService;


// classes and constructor ==> pascal case
// function,varibales,methods,object properties===> camelc case

// Dont import like below---- 
// const  { UserRepository }=require('../repository/user-repository');