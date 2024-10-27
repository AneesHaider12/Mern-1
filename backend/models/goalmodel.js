const mongoose =require('mongoose');
const goalschema =mongoose.Schema(
{
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    name1:{
        type:String,
        required:true
    }
},
    {
         Timestamp:true
    }
)
module.exports=mongoose.model('Goal',goalschema);