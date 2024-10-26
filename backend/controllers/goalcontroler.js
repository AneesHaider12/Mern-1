const GOAL=require('../models/goalmodel')
const getgoals=async(req,res)=>{

   const goals=await GOAL.find();
     res.status(200).json(goals)
}
const postgoals=async(req,res)=>{
   if (!req.body.name1) {
      return res.status(400).json({ 
          message: "All fields are required"
      });
  }
   const goal=await GOAL.create({
      name1:req.body.name1
   })
   
    res.status(201).json(goal);
}
const updategoals=async(req,res)=>{
   const goal=await GOAL.findById(req.params.id);
   if(!goal){
      res.status(400)
      throw new Error('Goal not found');
   }
   const updatedgoal=await GOAL.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
   })
    res.status(200).json(updatedgoal)
}
const deletegoals=async(req,res)=>{
   const goal=await GOAL.findById(req.params.id);
   if(!goal){
      res.status(400)
      throw new Error('Goal not found');
   }
   const deletedgoal=await GOAL.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message:"goal deleted successfully"
    })
}
module.exports={getgoals,postgoals,updategoals,deletegoals};