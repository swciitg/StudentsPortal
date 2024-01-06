import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: String,
  });
  
  export const Admin = mongoose.model("Admin", adminSchema);