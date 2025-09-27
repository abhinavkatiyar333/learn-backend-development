let express = require("express")

let app=express()

// Home page rout

app.get("/", (req,res)=>{
          res.send({status:1,msg:"Home Page API"})
})
// news page rout
app.get("/news", (req,res)=>{
          res.send({status:1,msg:"News Page API"})
})
app.listen("8000")