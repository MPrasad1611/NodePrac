const express = require("express");
const app = express();
const fs = require("fs").promises;
app.use(express.text());
app.use(express.json());
// app.get('/api', (req, res) => {
// //     fs.readFile('./hello.json', 'utf8', (err, data) => {
// //         if (err) {
// //             console.log(err);
// //         } else {
// //             res.send(JSON.parse(data));
// //         }
// //     })

// })
// app.post('/api', (req, res) => {

//     // let indata ="nodejs,express.js,mongodb"
//     let indata = req.body;
//     console.log(indata);
//     fs.appendFile('./new.json', JSON.stringify(indata), (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("data written to file");
//             res.send("data written to file");
//         }
//     });
//     });

app.post("/api", async (req, res) => {
  try {
    let indata = req.body;
    let edata = JSON.parse(await fs.readFile("./new.json", "utf8"));
    let iseal = edata.find((x, y) => {
      return x.id == indata.id;
    });
    console.log(iseal);
    if (iseal) {
      res.send("id already exist");
    } else {
      edata.push(indata);
      let udata = edata;
      await fs.writeFile("./new.json", JSON.stringify(udata));
      res.send("data written to file");
    }
  } catch (err) {
    res.send(err);
    console.log(err);
  }
});
app.delete("/fun", async (req, res) => {
   try {
    await fs.unlink("./hello1.txt")
    res.send("file deleted")
   }catch (err) {
    console.log(err);
   }
})
app.listen(3900, () => {
  console.log("server is running on port 3900");
});
