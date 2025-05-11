import mongoose from 'mongoose'

 export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://sharwanistack:sharwani@cluster0.hgcwccf.mongodb.net/food-delivery-final').then(()=>console.log("DB connected"));
}