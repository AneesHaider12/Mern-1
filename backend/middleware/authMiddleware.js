const jwt=require('jsonwebtoken')
const User=require('../models/usermodel')
    
    const protect=async (req,res,next)=>{
        let token;
    if(req.headers.authorization&&req.headers.authorization.startsWith('Bearer')){
        try{
            //Get token from the user
             token=req.headers.authorization.split(' ')[1];

        //Verify Token
        const decoded=jwt.verify(token,process.env.JWT_SECRET)

        //Get user from the token
        req.user=await User.findById(decoded.id).select('-password')
        next()
        }
        catch(error){
        console.log(error);
        res.status(401)
        throw new Error("not authorized")
        }
    }
if(!token){
    res.json({
        message:"no token no access"
    })
    
}

    }

    module.exports={protect}