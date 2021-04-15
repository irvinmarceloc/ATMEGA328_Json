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
const { isObject } = require('util');
const Readline = Serialport.parsers.Readline;

const port = new Serialport('/dev/ttyACM0',{
    baudRate: 9600
});

const parser = port.pipe(new Readline({delimeter: '\n\r\\'}));

parser.on('open',function(data) {
    console.log('conection is opened')
    server.emit(data)
});

parser.on('data',function(data) {
    console.log(data);
    io.emit ('tweet', data) ;
});

port.on('error', function(err){
    console.log(err)
})