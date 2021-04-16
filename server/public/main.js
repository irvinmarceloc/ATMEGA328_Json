const socket = io();

socket.on('temp', function(data){
    console.log(data)
});