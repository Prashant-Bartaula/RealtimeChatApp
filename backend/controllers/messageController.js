import User from "../models/userModel.js";
import Message from "../models/messageModel.js";
import { getReceiverSocketId, io } from "../utils/socket.js";

export const getUsers = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    // const users = await User.find({ _id: { $ne: loggedInUser } }).select(
    //   "-password"
    // );

    const usersWithRecentMessages = await User.aggregate([
      {
        $match: {
          _id: { $ne: loggedInUser },
        },
      },
      {
        $lookup: {
          from: "messages", 
          let: { userId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $or: [{
                    $and:[
                      { $eq: ["$senderId", "$$userId"] },
                      { $eq: ["$receiverId", loggedInUser] },
                    ],
                    },
                    {
                      $and:[
                        { $eq: ["$senderId", loggedInUser] },
                        { $eq: ["$receiverId", "$$userId"] },
                      ]
                    }
                  ],
                },
              },
            },
            { $sort: { createdAt: -1 } }, 
            { $limit: 1 }, 
          ],
          as: "recentMessage",
        },
      },
      {
        $unwind: {
          path: "$recentMessage",
          preserveNullAndEmptyArrays: true, 
        },
      },
      {
        $project: {
          _id: 1,
          fullName: 1,
          email: 1,
          description: 1,
          phone: 1,
          profilePic: 1,
          recentMessage: {
            text: "$recentMessage.text",
            createdAt: "$recentMessage.createdAt",
            senderId: "$recentMessage.senderId",
            receiverId: "$recentMessage.receiverId",
          },
        },
      },
    ]);

    res.status(200).json({
      usersWithRecentMessages,
    });
  } catch (error) {
    console.log("Error in getUser controller", error.message);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const sendMesasge = async (req, res) => {
  const { receiverId } = req.params;
  const { text } = req.body;
  const senderId = req.user._id;

  if (!text)
    return res.status(400).json({ message: "All fields are required" });
  try {
    const message = await Message.create({
      senderId,
      receiverId,
      text,
    });
    if (!message) {
      return res.status(400).json({ message: "Invalid message data" });
    }
    await message.save();

    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("message", message);
    }

    res.status(200).json({
      message: "Message sent successfully",
      data: message,
    });
  } catch (error) {
    console.log("Error in sendMesasge controller", error.message);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const getMessages = async (req, res) => {
  const receiverId = req.params.receiverId;
  const senderId = req.user._id;
  try {
    const messages = await Message.find({
      $or: [
        { senderId: senderId, receiverId: receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
    });

    res.status(200).json({
      messages,
    });
  } catch (error) {
    console.log("Error in getMessages controller", error.message);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
