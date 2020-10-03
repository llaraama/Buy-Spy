const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt=require("bcryptjs")

// authentication start to the username and password section of the app
const userSchema = new Schema({
  username: {type:String, required: true},
  password: {type:String, required:true}
});

const User = mongoose.model("User",userSchema)
module.exports = User;
