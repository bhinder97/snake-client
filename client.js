const net = require('net') //connects to the net (i think)

const { IP, PORT } = require("./constants"); //calls variables IP AND PORT from constants.js

const connect = function () { //our connect function which connects to the remote server
  const conn = net.createConnection({ //this does the connecting
    host: IP, //the IP we're connecting to
    port: PORT //the port theyre using
  });

  const name = "LuL"; //the name we're going to display

  conn.setEncoding("utf8"); //makes sure everything we send is sent as text
  conn.on('data', (data) => { //receiving data event from server
    console.log('Server sent you a msg!');
    console.log(data);
  })
  conn.on('connect', () => { //our connect event, which recieves info from server when we connect
    console.log("Successfully connected to game server")
    conn.write(`Name: ${name}`); //displays the name we defined
  });
  

  return conn;
};

module.exports = connect //exports the connect function to use in other files