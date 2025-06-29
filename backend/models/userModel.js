import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    friends:{
      type: Array,
      default: [],
    },
    profilePic: {
      type: String,
      default: "https://www.svgrepo.com/show/316976/profile.svg",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
