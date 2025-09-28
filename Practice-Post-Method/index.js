        // use POST method
let express = require("express")
let app = express()
app.use(express.json());

app.post("/",(req,res)=>{
          console.log(req.body)

          res.send({
                    status:1,
                    name:"Abhinav",
                    address:"Unnao",
                     data: req.body

          })
})

app.listen(9000)

