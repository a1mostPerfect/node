function sayHello() {
  console.log("Say hello from SayHello.js");
  console.log("dirname", __dirname);
  console.log("filename", __filename);
  console.log("process.cwd()", process.cwd());
}

module.exports = { sayHello };
