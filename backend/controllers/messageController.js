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
