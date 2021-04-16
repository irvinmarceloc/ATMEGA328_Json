var socket = io();

socket.on('temp', function(data){
    console.log(data);
    let temp = document.getElementById('temperature')
    temp.innerHTML =  String(data) + 'ºC';
});