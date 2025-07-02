import { Socket } from 'dgram';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app=express();
const server=http.createServer(app);

//create a new socket instance
const io=new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        credentials: true
    }
})

export function getReceiverSocketId(userId){
    return userSocketMap[userId];
}

//store online users and their socket ids
const userSocketMap={};

io.on('connection', (client)=>{
    console.log("a user has connected with user id = ", client.id)

    const userId=client.handshake.query.userId;//
    if(userId) userSocketMap[userId]=client.id;

    io.emit('getOnlineUsers', Object.keys(userSocketMap));

    client.on('disconnect', ()=>{
        console.log('user disconnected', client.id)
        delete userSocketMap[userId];
        io.emit('getOnlineUser', Object.keys(userSocketMap));
    })
})

export {io, app, server};