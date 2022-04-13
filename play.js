const { write } = require('fs');
const net = require('net');

const connect = require("./client");

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  // if (key === "w") {
  //   console.log("Move: up");
  // }
};

setupInput()

console.log('Connecting ...');
connect();