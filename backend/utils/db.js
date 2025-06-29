import mongoose from 'mongoose';

const connectDB=async()=>{
    try {
    const conn=await mongoose.connect(process.env.MONGO_URI);
    if(conn) console.log('mongo db database connected successfully');
    } catch (error) {
        console.log('db connection unsuccessful ', error.message)
    }
}

export default connectDB;