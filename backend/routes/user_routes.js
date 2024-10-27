const express=require('express');
const {protect}=require('../middleware/authMiddleware')
const router=express.Router();
const {registerUser,getUser,LoginUser}=require('../controllers/usercontroller')
router.post('/',registerUser);
router.get('/me',protect,getUser);
router.post('/login',LoginUser);
module.exports=router