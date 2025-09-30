let express = require("express");
require("dotenv").config();
const { checkToken } = require("./checkMiddleware");
let aap = express();

aap.use(express.json());

console.log(process.env.Mytoken)

// Middleware Apply on this Route

aap.get("/Name", checkToken,(req,res)=>{
          res.send({
                    status:1,
                    name:"Abhinav Katiyar",
                    home:"Bangarmau"

          })
})

aap.get("/Home",(req,res)=>{
          res.send({
                    status:1,
                    name:"Haibatpur",
                    home:"Bangarmau",
                    Dist:"Unnao"

          })
})

aap.listen(1300);