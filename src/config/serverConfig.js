const dotenv=require('dotenv');

dotenv.config();

module.exports={
    PORT: process.env.PORT
}

console.log("ENV PORT =", process.env.PORT);
