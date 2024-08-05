import mongoose from "mongoose"
export const connectDb =async ()=>{
await mongoose.connect('mongodb+srv://srivastavdivyansh9:Divyansh123@cluster0.lrfi6rt.mongodb.net/ToDoApp')
console.log("db is connected");
}
