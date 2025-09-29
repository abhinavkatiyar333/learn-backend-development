let express = require("express")
let app = express()
app.use(express.json())

let Newpassword = "1234321"

// Middleware

let CheckPassword=(req,res,next)=>{
          if(req.query.pass == "" || req.query.pass == undefined){
                    return res.send({
                              status:0,
                              msg:"Write a Password"
                    })
          }
          if(req.query.pass != Newpassword){
                    return res.send({
                              status:0,
                              msg:"Enter Correct password"
                    })
          }
          next();
          
}
app.use(CheckPassword);

app.get("/Name",(req,res)=>{
        res.send({
          status:1,
          name:"Abhinav katiyar",
          add:"Haibatpur",
          MobileNO :9335754406

        })
})
app.listen(1500);