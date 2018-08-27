var socket = io();
socket.on('connect', function() {   //send request
  console.log('Connected to server');


});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});
socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});

// socket.on('newEmail', function (email) {       //listen to custom events
//   console.log('New email',email);
// });
