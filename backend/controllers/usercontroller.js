const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const User=require('../models/usermodel') 


const registerUser= async (req,res)=>{
const {name,email,password}=req.body
if(!name || !email ||!password){
   res.status(400).json({
      message:"enter all fields bitch"
   })

}
const userExists=await User.findOne({email});
if(userExists){
   res.status(400)
   throw new Error("User already exists")
}
//Hash Password
const salt=await bcrypt.genSalt(10);
const hashedpassword=await bcrypt.hash(password,salt);

const user=await User.create({
   name,
   email,
   password:hashedpassword
})
if(user){
   res.status(201).json({
      _id:user.id,
      name:user.name ,
      email:user.email,
      token:token(user._id)
   })
}
   else{
      res.status(400)
      throw new Error("invalid user data")
   }

    
     
 }
const LoginUser=async(req,res)=>{
    const  {email,password}=req.body
    const user=await User.findOne({email})
    if(user&& (await bcrypt.compare(password,user.password))) {
      res.json({
         _id:user.id,
         name:user.name,
         email:user.email,
         token:token(user._id)
      })
   } 
   else{
      res.status(400 ).json({
         message:"invalid credentials"
      });
   }
   
}
const getUser=async(req,res)=>{
const {_id,name,email,password}=await User.findById(req.user.id);
res.status(200).json({
   id:_id,
   name,
   email
})
}
//Generate JWT
const token=(id)=>{
   return jwt.sign({id},process.env.JWT_SECRET,{
      expiresIn:'30d'
   })
}


 module.exports={registerUser,LoginUser,getUser}