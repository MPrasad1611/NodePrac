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
    fs.readFile("./data.json", "utf8", (err, data) => {
      if (err) {
        res.write(err);
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        //  console.log(JSON.parse(data));
        //   res.write(data);
        //   res.end();
        let existingData = JSON.parse(data);
        existingData.push(6);
        console.log(existingData);
        fs.writeFile("./data.json", JSON.stringify(existingData), (err) => {
          if (err) {
            res.write(err);
            res.end();
          } else {
            res.write("Data saved successfully");
            res.end();
          }
        });
      }
    });
  } else if (req.method == "POST") {
    // let ipData = "";

    // req.on("data", (chunk) => {
    //   ipData += chunk;
    // });

    // req.on("end", () => {
    //   fs.writeFile("./info.txt", ipData, (err) => {
    //     if (err) {
    //       console.log(err);
    //       res.end("Error saving data");
    //     } else {
    //       res.end("Data saved successfully");
    //     }
    //   });
    // });

    fs.readFile("./data.json", (err, data) => {
      if (err) {
        res.write(err);
        res.end();
      } else {
        let newName = "Ram";
        let existingData1 = JSON.parse(data);
        existingData1.push(newName);
        fs.writeFile("./data.json", JSON.stringify(existingData1), (err) => {
          if (err) {
            res.write(err);
            res.end();
          } else {
            res.write("Data saved successfully");
            res.end();
          }
        });
      }
    });
  } else {
    res.end("Invalid request");
  }
});

server.listen(3456, () => {
  console.log("Server is running");
});
