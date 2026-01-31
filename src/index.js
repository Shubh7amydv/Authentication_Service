const express=require('express');
const bodyParser=require('body-parser');

const apiroutes=require('./routes/index')

const { PORT }=require("./config/serverConfig")
// const UserRepository=require("./repository/user-repository");




const prepareAndStartServer = ()=>{

    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api', apiroutes );

    app.listen(PORT,async ()=>{
        console.log(`Server started at port : ${ PORT }`)
        // const repo=new UserRepository();
        // const response= await repo.getById(6);
        // console.log(response);
    })
}

prepareAndStartServer();
  