const  UserService =require("../services/user-services");
const userService=new UserService();

const createUser=async (req,res)=>{
    try {
        const user=await userService.createUser(req.body);
        return res.status(201).json({
            data:user,
            success:true,
            message:"successfully created the user",
            err:{}
        })
    } catch (error) {

        console.log("REQ BODY:", req.body);
        return res.status(500).json({
            data:{},
            success:false,
            message:"cannot create the user",
            err:error
        })
        
    }
}

const signIn= async(req,res)=>{
    try {
         const response=await userService.signIn(req.body.email,req.body.password);
         return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully signed in",
      err: {}
    });

        
    } catch (error) {
          console.log("REQ BODY:", req.body);
          return res.status(500).json({
            data:{},
            success:false,
            message:"cannot sign in the user",
            err:error
        })
        
    }
}

module.exports={
    createUser,
    signIn
}




// const create= async (req,res) =>{
//     try {

//        const flight=await FlightService.createFlight(req.body);
//        return res.status(201).json({
//             data:flight,
//             success:true,
//             message:"successfully created a airport ",
//             err:{}
//         });

    
        
//     } catch (error) {
//         console.log("REQ BODY:", req.body);
//         return res.status(500).json({
//             data:{},
//             success:false,
//             message:"Cannot create a flightt ",
//             err:error
//         })
//     }
// };