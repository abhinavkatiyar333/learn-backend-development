let express = require("express")
const { dbConnection } = require("./dbConnection")
let app = express()

app.use(express.json())

app.get("/student-read",(req,res)=>{
          res.send("Student view API")
})

app.post("/student-insert",async (req,res)=>{
          let myDB = await dbConnection();
          //Db collection
           let studentCollection= myDB.collection("students")

           let obj ={
                    SName:req.body.name,
                    spassword:req.body.password
           }
           console.log(obj);
           // go to data go to db
           let insertRes = await studentCollection.insertOne(obj)
           let resobj = {
                    status:1,
                    msg:"data insert"
           }
          res.send(resobj)
})

app.listen(1000)