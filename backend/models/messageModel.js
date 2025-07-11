import mongoose from "mongoose";

const messageSchema=new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true,
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true,
    },
    text:{
        type:String,
        required:true,
    },
    image:{
        type:String,
    }
}, {timestamps:true})

export default mongoose.model('messages', messageSchema);