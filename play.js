const net = require('net');


const connect = require("./client"); //calling our connect function from the client.js
const setupInput = require("./input") //calling our setupInput function from input.js


console.log('Connecting ...');
const conn = connect(); //pushed the returned value from connect() into conn

setupInput(conn);