const app=require("http");
const server=app.createServer((req,res)=>{
    res.write("hello world")
    res.end("response Provided")
})
server.listen("3101",()=>{
    console.log("it's Working")
})