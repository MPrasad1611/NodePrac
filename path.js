const http = require("http");
const fs = require("fs");
const path = require("path");
// const server = http.createServer((req, res) => {
//     if (req.method == "GET")   {
//         fs.readFile("./hello.json","utf8", (err, data) => {
//             if (err) {
//                 res.end(err);
//             } else{
//                 console.log(JSON.parse(data) );
//                 res.writeHead(200, { "Content-Type": "application/json" });
//                 res.write(data);
//                 res.end();
//             }
//         })

//     }
// })
// const server = http.createServer((req, res) => {
//   if (req.method == "POST") {
//     let ipData = "";
//     // let ipData ={"id":3,"name":"sagar","age":23};
//     req.on("data", (chunk) => {
//       ipData += chunk.toString();
//     });
//     req.on("end", () => {
//       fs.readFile("./hello.json", "utf8", (err, data) => {
//         if (err) {
//           res.end(err);
//         } else {
//           let existdata = JSON.parse(data);
//           existdata.push(JSON.parse(ipData));
//           let updatedata = JSON.stringify(existdata);
//           fs.writeFile("./hello.json", updatedata, (err) => {
//             if (err) {
//               res.end(err);
//             } else {
//               res.write("Data updated successfully");
//               res.end();
//             }
//           });
//         }
//       });
//     });
//   }
// });
// const server=http.createServer((req,res)=>{
//     fs.mkdir("sample1",()=>{
//         res.end("Directory created successfully")
//     })
// })
// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));
// console.log(path.parse(__dirname));
//  console.log(path.join(__dirname,"sample1.js","sample2","sample3"));
//  console.log(path.join(__filename,"sample1","sample2","sample3"));
const server = http.createServer((req, res) => {
  fs.mkdir(path.join(__dirname,"sample1"),{recursive:true}  ,() => {
    res.end("Directory created successfully");
  });
});
server.listen(5646, () => {
  console.log("Server is running ");
});
