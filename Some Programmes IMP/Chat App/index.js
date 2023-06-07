const http = require("http");
const express = require("express");
const app=express()

const server = http.createServer(app);

const { Server } = require("socket.io");
const { Socket } = require("dgram");

const io = new Server(server);

io.on('connection', (socket) => {
    console.log("a user connected");

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    })

    socket.on('disconnect',()=> {
        console.log('user disconnected');
    })
})

app.get("/", (req, res) => {
    res.sendFile(__dirname+'/index.html');
})
server.listen(3000, () => {
    console.log('server is running on port 3000');
})