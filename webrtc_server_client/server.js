const http = require('http');
const os = require('os');
const socketIO = require('socket.io');
const nodeStatic = require('node-static');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'React_Web_Page/build')));

app.listen(8080, function () {
    console.log('listening on 8080')
  }); 

app.get('/', function (요청, 응답) {
    응답.sendFile(path.join(__dirname, '/React_Web_Page/build/index.html'));
  });
