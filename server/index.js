const http = require('http')
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);


app.use(express.static(__dirname + '/public'))

server.listen(3000, () => {
    console.log('server listening on port', 3000);
});

//Serial Comunication
const Serialport = require('serialport');
const Readline = Serialport.parsers.Readline;

const port = new Serialport('/dev/ttyACM0',{
    baudRate: 9600
});

const parser = port.pipe(new Readline({delimeter: '\r\n'}));

parser.on('open',function(data) {
    console.log('conection is opened');
});

parser.on('data',function(data) {
    temp = parseInt(data, 10)+ ' ºC';
    console.log(temp);
    io.emit('temp', data) ;
});

port.on('error', function(err){
    console.log(err)
});