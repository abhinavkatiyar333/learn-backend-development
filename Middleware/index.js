let express = require("express")

let app = express()

app.use(express.json())

// middleware

let checkToken = (req,res,next)=>{
          console.log("Welcome");
          next();
}

app.get("/mmmut",(req,res)=>{
          res.send({
                    state:1,
                    name:"Abhinav",
                    RollNo :3,
                    data: req.body      
                    

          })
})

app.listen(1000)