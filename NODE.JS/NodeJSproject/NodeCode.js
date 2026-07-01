//const calculator = require("./Calculator");
const {
  addition,
  subtraction,
  multiplication,
  division,
} = require("./Calculator");
console.log("hello world");
//console.log(require("./Calculator"));

// console.log(calculator.addition(25,985));
// console.log(calculator.subtraction(25,985));
// console.log(calculator.multiplication(25,985));
// console.log(calculator.division(25,985));

console.log(addition(25, 985));
console.log(subtraction(25, 985));
console.log(multiplication(25, 985));
console.log(division(25, 985));

//Global Object: same as Window in the browser;

//Modules:
//this file is called the main module
//calculator.js is a module
//we use modules to structrize our codes

//Node.JS native modules:
//PathModule:
const path = require("path");
let parsed = path.parse(__filename);
console.log(parsed);

//OS module:
const OS = require("os");
console.log("FreeMemory", OS.freemem());
console.log("TotalMemory", OS.totalmem());

//FileSystemModule:
const fs = require("fs");
const files = fs.readdirSync("./");
console.log(files);

fs.readdir("./", (err, files) => {
  console.log(err);
  console.log(files);
});

//Event(The Event & EventCall):
const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("bell", (e) => {
  console.log(e);
  console.log("OpenTheDoor");
});
emitter.emit("bell", { time: Date.now(), count: 10 });
//NOTE:Always define an event and call it afterwards

//Yeeeeaaaaaaaaahhhhhhhhhhh
//HTTP Module:
// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log("NewConnection!");
//   console.log(req.url);
//   if (req.url === "/") {
//     res.write("HomePage");
//   } else if (req.url === "/URL") {
//     res.write("Response");
//   } else {
//     res.write(JSON.stringify({ products: ["product1,product2"] }));
//   }
//   res.end();
// });
// server.listen(3000);

const moment = require("jalali-moment");
console.log(moment(new Date()).locale("fa").format("YYYY/MM/DD"));