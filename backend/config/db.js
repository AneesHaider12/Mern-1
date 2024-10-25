const mongoose=require('mongoose')

const connectdb=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongodb connected ${conn.connection.host}`);
        
    }catch(error){
        console.log(error);
        
        console.log('error in connection to db');
        
    }
}
module.exports=connectdb