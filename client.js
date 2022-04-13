const net = require('net')

const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  const name = "LuL";

  conn.setEncoding("utf8");
  conn.on('data', (data) => {
    console.log('Server sent you a msg!');
    console.log(data);
  })
  conn.on('connect', () => {
    console.log("Successfully connected to game server")
    conn.write(`Name: ${name}`);
  });
  

  return conn;
};

module.exports = connect