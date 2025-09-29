let express = require("express")
let app = express();

app.get("/news/:id",(req,res)=>{
          let currentId = req.params.id;
          res.send("News Details API"+ currentId);
})

app.listen(8000)