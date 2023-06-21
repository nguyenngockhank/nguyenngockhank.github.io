const express = require('express');
const app = express();
const http = require('http').Server(app);
const socketIO = require('socket.io');

const server = http.listen(3000, () => {
  console.log('listening on *:3000');
});

const io = socketIO(server);

// io.set('match origin protocol', true)

let broadcaster;

let info = {
  broadcaster
}

io.on('connection', (socket) => {
    // console.log('a user connected');
    // socket.on('disconnect', (context) => {
    //   console.log(context)
    //   console.log('user disconnected');
    // });
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
      io.emit('chat message', msg);
    });
  
    socket.on("broadcaster", () => {
      console.log(">>> broadcaster", socket.id)
      broadcaster = socket.id;
      socket.broadcast.emit("broadcaster");
    });
    socket.on("watcher", () => {
      console.log(">>>  watcher ", socket.id)
      socket.to(broadcaster).emit("watcher", socket.id);
    });
    socket.on("disconnect", () => {
      console.log("disconnected")
      socket.to(broadcaster).emit("disconnectPeer", socket.id);
    });


    socket.on("offer", (id, message) => {
      console.log(">>> offer", id,  socket.id ,message)
      socket.to(id).emit("offer", socket.id, message);
    });
    socket.on("answer", (id, message) => {
      console.log(">>> answer", id,  socket.id ,message)
      socket.to(id).emit("answer", socket.id, message);
    });
    socket.on("candidate", (id, message) => {
      console.log(">>> candidate", id,  socket.id ,message)
      socket.to(id).emit("candidate", socket.id, message);
    });
  });
  
app.use(express.static(__dirname + "/public"));