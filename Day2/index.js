let http=require("http")

let server = http.createServer( (req,res)=>{

          if(req.url == "/news"){
                 let obj ={
                    status:1,
                    data:[
                              {
                                        newsTitle:"ws",
                                        newsDes:"Ws Hello"
                              },
                              {
                                       newsTitle:"IIP",
                                        newsDes:"IIP Hello" 
                              }
                    ]


                    
                 }
                 res.end(JSON.stringify(obj))

          }
          if(req.url=="/about"){
                    res.end("Data about me")

          }
          if(req.url=="/"){
                     res.end("Welcome Abhinav Katiyar") 

          }
 
})


server.listen("8000") // http://localhost:8000