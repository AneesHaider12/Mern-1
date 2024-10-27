const express=require('express');
const dotenv =require('dotenv').config();
const PORT=process.env.PORT;
const connectdb=require('./config/db')
const app=express();
connectdb()
app.use(express.urlencoded({ extended: true }));

app.use('/api/goals',require('./routes/goal_routes'))
app.use('/api/users',require('./routes/user_routes'))
app.use(express.json())
app.listen(PORT,()=>console.log(`Server started at ${PORT}`)
)

