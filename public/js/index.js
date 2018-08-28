var socket = io();
socket.on('connect', function() {   //send request
  console.log('Connected to server');


});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});
socket.on('newMessage', function (message) {
  console.log('newMessage', message);

  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);
  jQuery('#messages').append(li);

});

// socket.on('newEmail', function (email) {       //listen to custom events
//   console.log('New email',email);
// });

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();
  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function () {

  });

});
