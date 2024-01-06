import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name:{type:String},
    email: { type: String, required: true, unique: true },
    token:{type:String, default:null, null:true},
  });
  
  export const Admins = mongoose.model("Admins", adminSchema);