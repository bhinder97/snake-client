const net = require('net')

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
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
    // conn.write("Move: up");
    setInterval(() => {
      conn.write("Move: up")
    }, 50)
  });

  return conn;
};

module.exports = connect