const express = require("express");
const app = express();
app.use(express.json());
// var is_valid= true;
// var is_admin = false;
// app.use((req,res,next)=>{
//     // console.log("Middleware 1");
//     if(is_valid){
//         res.send("middleware 1 is runing")
//         next();
//     }
//     else{
//         res.send("Not Allowed")
//     }
// })
// app.use((req,res,next)=>{
//     if(is_admin){
//         res.send("middleware 2 is runing")
//     }
//     else{
//         res.send("Not Allowed2")
//     }
// })
// app.get("/info",(req,res)=>{
//     res.send("Hello World")
// })
// const middleware1 = (req,res,next)=>{
//     if(true){
//         next();
//     }
//     else{
//         res.send("Not Allowed")
//     }
// }
// const middleware2 = (req,res,next)=>{
//     if(true){
//         next();
//     }
//     else{
//         res.send("Not Allowed2")
//     }
// }
// app.get("/info",middleware1,middleware2,(req,res)=>{
//     res.send("Hello World")
// })
const validmiddle = (req, res, next) => {
  let inputName = req.body.username;
  var userRegex = /^[a-zA-Z0-9_]{3,15}$/;
  if (inputName.length <= 0) {
    res.status(400).send("Username must not Empty");
  } else if (userRegex.test(inputName)) {
    next();
  } else {
    res.status(400).send("Invalid username");
  }
};
const passvalidmiddle = (req, res, next) => {
  let inputPass = req.body.password;
  var passRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (inputPass.length <= 0) {
    res.status(400).send("Password must not Empty");
  } else if (passRegex.test(inputPass)) {
    next();
  } else {
    res.status(400).send("Invalid Password");
  }
};
app.post("/signup", validmiddle, passvalidmiddle, (req, res) => {
  res.send("Signup successful");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
