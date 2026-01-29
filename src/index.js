const express=require('express');
const bodyParser=require('body-parser');

const apiroutes=require('./routes/index')

const { PORT }=require("./config/serverConfig")




const prepareAndStartServer = ()=>{

    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api', apiroutes );

    app.listen(PORT,()=>{
        console.log(`Server started at port : ${ PORT }`)
    })
}

prepareAndStartServer();
  