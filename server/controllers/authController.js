const User= require("../models/User");

exports.registerUser=async(req,res)=>{
    try {
        const { fullName, department, role, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: "Email already in use" });
        } else {
          const newUser = new User({
            fullName,
            department,
            role,
            email,
            password,  
          });
          await newUser.save();
          res.status(201).json({ message: "User registered successfully" });
        }
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Server error" });
    }
};
exports.getUsers=async(req,res)=>{
  try { 
    const users=await User.find();
    res.status(200).json(users);
  } catch (error) {   
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error" });
  } 
};