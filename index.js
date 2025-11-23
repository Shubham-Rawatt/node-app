// // const http = require('http')
// import http from "http";

// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     res.end("welcome to home");
//   } else if (req.url == "/about") {
//     req.url("welcome to about");
//   } else if (req.url == "/contact") {
//     req.url("welcome to contact");
//   } else {
//     res.end("404 page not found");
//   }
// });

// server.listen(8000, () => {
//   console.log("server is running");
// });



// const http = require('http')
import http from "http";

const server = http.createServer((req, res) => {
  res.write("server is running now");
  res.end('server is end');
});

server.listen(8000, () => {
  console.log("server is running on https://localhost:8000");
});
