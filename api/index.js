import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Mongodb Connected!!")
})
.catch(err=>{
    console.log("Errror")
    console.log(err)
})
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser';

const app=express();
app.use(express.json());
app.use(cookieParser());
app.listen(3000,()=>{
    console.log("Server is running  on port 3000!");
});

app.use('/api/user',userRoutes);  //use in index.js
app.use('/api/auth',authRoutes);  //use in index.js

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    const message=err.message||'Internal Server Error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message

    })
})
;