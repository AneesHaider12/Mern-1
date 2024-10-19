const express =require('express');
const router =express.Router()
const {getgoals,postgoals,updategoals,deletegoals}=require('../controllers/goalcontroler')
router.get('/',getgoals);
router.post('/',postgoals)
router.put('/:id',updategoals)
router.delete('/:id',deletegoals)

module.exports=router