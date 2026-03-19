const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  department:{
    type: String, 
    required: true,
  },
  role:{
    type: String,
    enum: ['Employee', 'Support_engineer'],
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
    password: { 
    type: String,
    required: true,
    unique: true,
  },

  createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null,
  }

},
{
  timestamps: true,
});
module.exports = mongoose.model("User", UserSchema);