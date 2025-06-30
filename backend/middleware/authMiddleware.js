import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const protectRoute = async (req, res, next) => {
  const cookieToken = req.cookies.jwt;
  if(!cookieToken){
    return ;
  }
  try {
    const decoded=jwt.verify(cookieToken, process.env.JWT_SECRET);
    if(!decoded){
      return res.status(401).json({message:"Unauthorized- invalid token"});
    }

    const user=await User.findById(decoded.userId).select('-password');//selecting all fields except password
    if(!user){
      return res.status(401).json({message:"invalid credentials- user not found"});
    }
    req.user=user;
    next();
  } catch (error) {
    console.log('Error in protectRoute middleware', error.message);
    res.status(500).json({message:"Internal Server Error"});
  }
};
