const mongoose =require('mongoose');
const goalschema =mongoose.Schema(
{
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