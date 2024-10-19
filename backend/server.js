const express=require('express');
const dotenv =require('dotenv').config();
const PORT=process.env.PORT;

const app=express();
app.use('/api/goals',require('./routes/goal_routes'))
app.listen(PORT,()=>console.log(`Server started at ${PORT}`)
)

