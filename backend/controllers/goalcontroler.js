const getgoals=(req,res)=>{
     res.status(200).json({
        message:'get goals'
     })
}
const postgoals=(req,res)=>{
   if(!req.body.text){
      res.status(400)
      throw new Error('enter required fields')
   }
    res.status(200).json({
       message:'post goals'
    })
}
const updategoals=(req,res)=>{
    res.status(200).json({
       message:'update goals'
    })
}
const deletegoals=(req,res)=>{
    res.status(200).json({
       message:'delete goals'
    })
}
module.exports={getgoals,postgoals,updategoals,deletegoals};