import User from "../models/userModel.js";
import Message from "../models/messageModel.js";

export const getUsers = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const users = await User.find({ _id: { $ne: loggedInUser } }).select(
      "-password"
    );

    res.status(200).json({
      users,
    });
  } catch (error) {
    console.log("Error in getUser controller", error.message);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};


export const sendMesasge=async(req, res)=>{
  const {receiverId}=req.params;
  const {text}=req.body;
  const senderId=req.user._id;

  if(!text) return res.status(400).json({message:"All fields are required"})
  try {
    const message=await Message.create({
      senderId,
      receiverId,
      text
    })
    if(!message){
      return res.status(400).json({message:"Invalid message data"});
    }
    await message.save();

    res.status(200).json({
      message:"Message sent successfully",
    });
    
  } catch (error) {
    console.log("Error in sendMesasge controller", error.message);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}