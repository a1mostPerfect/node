// const { sayHello } = require("./folder/sayHello");

// sayHello();

// console.log("dirname", __dirname);
// console.log("filename", __filename);
// console.log("process.cwd()", process.cwd());

// main.js | server.js | index.js | app.js
// join, normalize, resolve

// const path = require("path");

// const joinedPath = path.join(__dirname, "something", "bad");
// console.log(joinedPath);

// const normalizedPath = path.normalize("user///fd//fd//fd/fh3g"); // just path without current directory
// const resolvedPath = path.resolve("something", "suepr", "bad"); // current directory

// console.log(normalizedPath);
// console.log(resolvedPath);

// -------------------
// os
// const os = require("os");
// console.log(os.cpus());
// console.log(os.arch());
// console.log(os.version());

// ------------
// FS

const fs = require("fs");
const fsPromise = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "folder", "name.txt");
// fs.writeFile(filePath, "Hello guys!!", (err) => {
//   if (err) throw new Error(err.message);
// });

// fs.appendFile(filePath, "\nappend file", (err) => {
//   if (err) throw new Error(err.message);
// });

// fs.truncate(filePath, (err) => {
//   if (err) throw new Error(err.message);
// });
// fs.unlink(filePath, (err) => {
//   if (err) throw new Error(err.message);
// });

// fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
//   if (err) throw new Error(err.message);
//   console.log(data);
// });
