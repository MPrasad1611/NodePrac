
// // const server = http.createServer((req, res) => {
// //     if (req.method == "GET")   {
// //         fs.readFile("./hello.json","utf8", (err, data) => {
// //             if (err) {
// //                 res.end(err);
// //             } else{
// //                 console.log(JSON.parse(data) );
// //                 res.writeHead(200, { "Content-Type": "application/json" });
// //                 res.write(data);
// //                 res.end();
// //             }
// //         })

// //     }
// // })
// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// const server = http.createServer((req, res) => {
//   if (req.method == "POST") {
//     let ipData = "";
   
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
// // const server=http.createServer((req,res)=>{
// //     fs.mkdir("sample1",()=>{
// //         res.end("Directory created successfully")
// //     })
// // })
// // console.log(path.basename(__filename));
// // console.log(path.basename(__dirname));
// // console.log(path.extname(__filename));
// // console.log(path.parse(__filename));
// // console.log(path.parse(__dirname));
// //  console.log(path.join(__dirname,"sample1.js","sample2","sample3"));
// //  console.log(path.join(__filename,"sample1","sample2","sample3"));
// // const server = http.createServer((req, res) => {
// //   fs.mkdir(path.join(__dirname,"sample1"),{recursive:true}  ,() => {
// //     res.end("Directory created successfully");
// //   });
// // });

// server.listen(5646, () => {
//   console.log("Server is running ");
// });
// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const server = http.createServer((req, res) => {
//   if (req.method == "POST") {
//     let ipData = "";

//     req.on("data", (chunk) => {
//       ipData += chunk.toString();
//     });

//     req.on("end", () => {
//       fs.readFile("./hello.json", "utf8", (err, data) => {
//         if (err) {
//           res.end(err);
//         } else {
//           let existdata = JSON.parse(data);
//           let newEntry = JSON.parse(ipData);

//           // Check if the email exists in old data
//           const emailExists = existdata.some((entry) => entry.email === newEntry.email);

//           if (!emailExists) {
//             res.write("Error: Email does not exist.");
//             res.end();
//             return;
//           }

//           existdata.push(newEntry);
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

// server.listen(5646, () => {
//   console.log("Server is running ");
// });
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   if (req.method == "POST") {
//     let ipData = "";

//     req.on("data", (chunk) => {
//       ipData += chunk.toString();
//     });

//     req.on("end", () => {
//       fs.readFile("./hello.json", "utf8", (err, data) => {
//         if (err) {
//           res.end("Error reading file");
//           return;
//         }

//         let existdata = JSON.parse(data);
//         let newEntry = JSON.parse(ipData);

//         if (!newEntry.email) {
//           res.end("Error: Email is required");
//           return;
//         }

//         const emailExists = existdata.some((entry) => entry.email === newEntry.email);

//         if (!emailExists) {
//           res.end("Error: Email does not exist");
//           return;
//         }

//         existdata.push(newEntry);
//         fs.writeFile("./hello.json", JSON.stringify(existdata, null, 2), (err) => {
//           if (err) {
//             res.end("Error writing file");
//           } else {
//             res.end("Data updated successfully");
//           }
//         });
//       });
//     });
//   }
// });

// server.listen(5646, () => {
//   console.log("Server is running");
// });

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let ipData = "";


    req.on("data", (chunk) => {
      ipData += chunk.toString();
    });

    req.on("end", () => {
      
      fs.readFile("./hello.json", "utf8", (err, data) => {
        if (err) {
          res.end("Error reading file");
          return;
        }

     
        let existdata = JSON.parse(data);

        
        const newData = JSON.parse(ipData);

        
        const emailExists = existdata.some((item) => item.email === newData.email);

        if (emailExists) {
         
          res.end("Email already exists");
        } else {
          
          existdata.push(newData);
          let updatedata = JSON.stringify(existdata, null, 2);


          fs.writeFile("./hello.json", updatedata, (err) => {
            if (err) {
              res.end("Error writing file");
            } else {
              res.end("Data updated successfully");
            }
          });
        }
      });
    });
  } else {
    
    res.end("Method Not Allowed");
  }
});

server.listen(5646, () => {
  console.log("Server is running ");
});