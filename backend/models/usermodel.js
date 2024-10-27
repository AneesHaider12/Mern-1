const mongoose=require('mongoose')
const userSchema=mongoose.Schema(
{
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    requird:true,
    unique:true
  } ,
  password:{
    type:String,
    required:true
  } 
},
{
    Timestamp:true
}
)
module.exports=mongoose.model("User",userSchema)

