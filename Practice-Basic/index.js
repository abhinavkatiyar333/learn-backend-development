// create server using get method

let express = require("express")

let app = express()
app.use(express.json())

app.get("/",(req,res)=>{
          res.send({
                    status:1,
                    name:"Abhinav",
                    from:"Unnao"
          })
})

app.get("/bhai",(req,res)=>{
          res.send({
                    status:2,
                    name:"Rishabh",
                    from:"Unnao"
          })

})

          app.post("/login",(req,res)=>{
                    console.log(req)
          res.send({
                    status:3,
                    name:"Rishabh",
                    from:"Unnao"
          })

})

app.listen(8001)