let connection; //undefined variable to be used later

const setupInput = function (conn) { //setting up how our inputs are sent to the server
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


const handleUserInput = function (key) { //defining all of our inputs by logging them to keys
  if (key === '\u0003' || key === "x") {
    process.exit();
  }
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "d") {
    connection.write("Move: right");
  };
  if (key === "f") {
    connection.write('Say: "Hel"')
  }
  if (key === "g") {
    connection.write('Say: "BYE"')
  }
};

module.exports = setupInput; //exporting the function to be used in another file
