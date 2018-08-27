const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket)=>       //this is an event listener
{
  console.log('new user connected');
// socket.emit('newEmail',{
//   from:'rish@gmail.com',
//   text:'Hey.',
//   createAt:123
// });


  // socket.on('createEmail', (newEmail) => {    //listener for the client from index.js
  //   console.log('createEmail', newEmail);
  // });
  socket.emit('newMessage', {
    from: 'Abhay',
    text: 'See you then',
    createdAt: 123123
  });

  socket.on('createMessage', (message)=> {
    console.log('createMessage', message);
  });



  socket.on('disconnect', () => {
    console.log('User Disconnected from server');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
