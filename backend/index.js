import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import {app, server} from './utils/socket.js';
import authRoutes from './routes/authRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import connectDB from './utils/db.js'


dotenv.config();
const PORT=process.env.PORT;


app.use(cookieParser());
app.use(express.json());

app.use(cors({
    origin:['http://localhost:5173'],
    credentials:true
})) 

//routes 
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes )


server.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
    connectDB();
})