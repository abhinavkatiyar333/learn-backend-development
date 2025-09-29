let express = require("express")
let app = express()

app.use(express.json()) // Inbuild Middleware

// Define Token
let Usetoken = "12345"
// Define Second Token
let mypass = "Abhi321"
// Middleware

let checkToken= (req,res,next)=>{
   if(req.query.token == "" || req.query.token==undefined){
          return res.send({
                    status:0,
                    msg:"Please fill token"
          }
)
   }
   if(req.query.token!=Usetoken){
          return res.send({
                    status:0,
                    msg:"Please fill Correct Token"
          })
   }

   next()
}
app.use(checkToken)// Middleware

app.use((req,res,next)=>{
   if(req.query.pass =="" || req.query.pass == undefined){

          return res.send({
                    status:0,
                    msg:"Please fill password"
          })
   }
   if(req.query.pass!=mypass){
          return res.send({
                    status:0,
                    msg:"Please fill Correct Password"
          })
   }
   next()
})



app.get("/Home" , (req,res)=>{
          res.send({
                    status:1,
                    name:"Haibatpur",
                    distic:"Unnao"
          })
})
app.listen(2000);