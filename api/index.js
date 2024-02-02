import express from 'express'
import mongoose from 'mongoose'
mongoose.connect('mongodb://127.0.0.1:27017/blog')
.then(()=>{
    console.log("Mongodb Connected!!")
})
.catch(err=>{
    console.log("Errror")
    console.log(err)
})
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

const app=express();
app.use(express.json());
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