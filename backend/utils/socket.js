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


io.on('connection', (client)=>{
    console.log("a user has connected with user id = ", client.id)
})

export {io, app, server};