const {User} = require('../db')
const jwt = require('jsonwebtoken')
const jwtsecret = process.env.JWTSECRET

const create_user=(req, res, next)=> {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    User.findOne({
        username: req.headers.username,
    }).then( async function(result){
        if(result==null) // the user does not exist
        {
        //forwarding to middleware which writes to the database
          await User.create({
            fullname:req.headers.fullname,
            username: req.headers.username,
            password: req.headers.password
          })
          next();
        }
        else{// the user exists
            res.status(400).json({"message":"user with this username already exits"})
            return 
        }
    })
}
const check_user=(req,res,next)=>{
  const content={username : req.headers.username,password: req.headers.password};
  User.findOne(
    content
  ).then((result)=>{
    if(result==null){
      res.status(400).json({"msg":"username and password don't match"});
      return;
    }
    else{
      next();
    }
  })
}
// const check_jwt=(req,res,next) =>{
//   key = req.headers.authorization;
//   try{jwt.verify(key,jwtsecret);req.myobj=new Object({given_username=jwt.decode()});next();}
//   catch(err){
//     res.status(400).json({msg:"u are not authorized"})
//   }
// }
const findUsername=(req,res,next)=>{
  User.findOne({
    username : req.myobj.given_username,
  }).then(result=>{
    if(result){
      myobj.username = result.fullname
    }
  })
}


module.exports ={
  create_user,
  check_user,
}