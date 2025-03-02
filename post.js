// const server = http.createServer((req, res) => {
//   if (req.method == "POST") {
//     let body = "";
//     req.on("data", (chunk) => {
//       body += chunk.toString();
//       console.log(body);
//       res.end();
//     });
//     req.on("error", (err) => {
//       console.log(err);
//       res.write(err);
//     });
//     req.on("end", () => {
//       res.end("data is received ");
//     });
//   }
// });
// fs.readFile();
// fs.readFileSync();
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.method == "POST") {
    ipData="My first post request"
    fs.appendFile("./info.txt", ipData, (err) => {
      if (err) {
        res.end(err);
      } else {
        res.write("Data written successfully");
        res.end();
      }
    });
  }
});
server.listen(5646, () => {
  console.log("Server is running ");
});

// const server = http.createServer((req, res) => {
//     if (req.method =="POST") {
//         fs.readFile("./sample.txt", (err, data) => {
//             if (err) {
//                 console.error(err);
//                 res.write(err);
//                 res.end();
//             } else {
//                 res.write(data);
//                 res.end();
//             }
//         });
//     }
// });

// server.listen(5646, () => {
//     console.log("Server is running on port 5646");
// });
