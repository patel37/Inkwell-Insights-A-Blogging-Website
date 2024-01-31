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


const app=express();
app.listen(3000,()=>{
    console.log("Server is running  on port 3000!");
});