import User from '../models/userModel.js'   
import bcrypt from 'bcryptjs'
import {generateToken} from '../utils/generateToken.js'
import cloudinary from '../utils/cloudinary.js';
import fs from 'fs';
export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const user = await User.findOne({ email });

    if (user) return res.status(400).json({ message: "Email already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      await newUser.save();
      res.status(200).json({ message: "User created successfully" });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login=async(req, res)=>{
    const {email, password}=req.body;

    if(!email || !password) return res.status(400).json({message:"All fields are required"});

    if(password.length<6) return res.status(400).json({message:"Password must be at least 6 characters"});

    try {
        const user=await User.findOne({email});
        if(user){
            const validUser=await bcrypt.compare(password, user.password);
            if(validUser){
                // const token=generateToken(user._id, res);
                generateToken(user._id, res);
                res.status(200).json({message:"User logged in successfully", user:{
                    userId:user._id,
                    fullName:user.fullName,
                    description:user.description,
                    phone:user.phone,
                    email:user.email,
                    profilePic:user.profilePic
                }});
            }else{
                res.status(400).json({message:"Invalid credentials"});
            }

        }else{
            res.status(400).json({message:"User does not exist"});
        }
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

export const logout=async(req, res)=>{
    try {
        res.cookie('jwt', '', {
            httpOnly: true,
            maxAge: 0
        })
        res.status(200).json({
            message:"User logged out successfully"
        })
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}
export const updateProflie=async(req, res)=>{
    try {
    const { fullName, description, phone } = req.body;
    const filePath=req.file.path;

    const userId = req.user._id;

    if(!filePath) return res.status(400).json({message:"Profile picture is required"});
    if(!fullName && !description && !phone) return res.status(400).json({message:"make some changes"});

    const uploadResponse = await cloudinary.uploader.upload(filePath, {
      folder: "RealTimeChat",
    });
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { 
        fullName,
        description,
        phone,
        profilePic: uploadResponse.secure_url
      },
      { new: true }
    );
       // Remove file after upload
    fs.unlinkSync(filePath);

    res.status(200).json(updatedUser);
  }catch (error) {
        console.log("Error in update profile controller", error.message);
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}
export const checkAuth=async(req, res)=>{
    try {
        res.status(200).json({
            message:"User is authenticated",
            //from middleware
            user:req.user
        })
    } catch (error) {
        console.log("Error in checkAuth controller", error.message);
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}