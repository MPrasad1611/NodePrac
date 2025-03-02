// const http = require("http");
// const fs = require("fs");
// const server=http.createServer((req,res)=>{
//   if(req.method=="GET"){
     
//   } 
//   else if(req.method=="POST"){
//     let ipData = "";
//       req.on("data", (chunk) => {
//           ipData+=chunk;
//       })
//       fs.writeFile("info.txt",ipData,(err)=>{
//         if(err){
//           console.log(err);
//         }
//         else{
           
//           res.end("Data saved successfully")
//         }
//       })
//   }
//   else{
//     res.end("Invalid request")
//   }
// })
// server.listen(3456, () => {
//     console.log("Server is running ");
//   });
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method == "GET") {
    res.end("GET request received"); // Response for GET requests
  } 
  else if (req.method == "POST") {
    let ipData = "";

    req.on("data", (chunk) => {
      ipData += chunk;
    });

    req.on("end", () => { // Ensuring data is fully received before writing
      fs.writeFile("info.txt", ipData, (err) => {
        if (err) {
          console.log(err);
          res.end("Error saving data");
        } else {
          res.end("Data saved successfully");
        }
      });
    });
  } 
  else {
    res.end("Invalid request");
  }
});

server.listen(3456, () => {
  console.log("Server is running");
});
