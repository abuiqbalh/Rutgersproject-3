
const mongoose = require("mongoose");
//const Schema = require("mongoose") is same as const {Schema}=mongoose
const {Schema} = mongoose;

const userSchema= new Schema({
     googleId: String
});

mongoose.model("users", userSchema);