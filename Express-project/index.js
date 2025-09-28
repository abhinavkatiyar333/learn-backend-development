let express = require("express")

let app=express()
 application.use(express.json)

// Home page rout

app.post("/login-page", (req,res)=>{
          console.log(req)
          res.send({status:1,msg:"Homes Page API"})
})
// news page rout
app.get("/news", (req,res)=>{
          res.send({status:1,msg:"News Page API"})
})
app.listen("8001")