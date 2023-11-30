/*const http = require('http');
const os = require('os');
const socketIO = require('socket.io');
const nodeStatic = require('node-static');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;
const server = http.createServer(app); // Express 앱을 사용하여 HTTP 서버 생성
const io = socketIO(server); // Socket.IO를 생성한 HTTP 서버에 연결
server.attach(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
server.use(express.static(path.join(__dirname, 'React-Web-Page/build')));
server.get('/', function (요청, 응답) {
    응답.sendFile(path.join(__dirname, '/React-Web-Page/build/index.html'));
  });
io = socketIO.attach(server);
io.sockets.on('connection',socket=>{
    function log() {
        let array = ['Message from server:'];
        array.push.apply(array,arguments);
        socket.emit('log',array);
    }

    socket.on('message',message=>{
        log('Client said : ' ,message);
        socket.broadcast.emit('message',message);
    });

    socket.on('create or join',room=>{
        let clientsInRoom = io.sockets.adapter.rooms[room];
        let numClients = clientsInRoom ? Object.keys(clientsInRoom.sockets).length : 0;
        log('Room ' + room + ' now has ' + numClients + ' client(s)');
        
        if(numClients === 0){
            console.log('create room!');
            socket.join(room);
            log('Client ID ' + socket.id + ' created room ' + room);
            socket.emit('created',room,socket.id);
        }
        else if(numClients===1){
            console.log('join room!');
            log('Client Id' + socket.id + 'joined room' + room);
            io.sockets.in(room).emit('join',room);
            socket.join(room);
            socket.emit('joined',room,socket.id);
            io.sockets.in(room).emit('ready');
        }else{
            socket.emit('full',room);
        }
    });


});
server.get('*', function (요청, 응답) {
    응답.sendFile(path.join(__dirname, '/react-project/build/index.html'));
  });
*/