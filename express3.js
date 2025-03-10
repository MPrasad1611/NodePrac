const express = require("express");
const app = express();
const fs= require("fs").promises;
app.get("/menu",async (req, res) => {
    // fs.readFile("./hello.json", "utf-8",(err, data) =>{
    //     if(err){
    //         res.status(500).send("Internal Server Error");
    //     }else
    //     {
    //         res.send(JSON.parse(data));
            
    //     }
    // })
    let data =await fs.readFile("./hello.json", "utf-8");
    console.log(data);
    res.send(JSON.parse(data));
})
app.listen(3000, () => {
  console.log("Server is running on port 3000");
})