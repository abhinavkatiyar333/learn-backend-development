

// Middleware
let checkToken =(req,res,next)=>{
          if(req.query.pass=="" || req.query.pass== undefined){
                    return res.send({
                              status:0,
                              msg:"Please Enter the Password"
                    })
          }
          if(req.query.pass != process.env.password){
                    return res.send({
                              status:0,
                              msg:"Enter correct password"
                    })
          }

          next()
}
module.exports = {checkToken}
