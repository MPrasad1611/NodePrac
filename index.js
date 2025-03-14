// const app = require("http");
// const url=require("url")
// // const server=app.createServer((req,res)=>{
// //     res.write("hello world")
// //     res.end("response Provided")
// // })
// // let obj = { name: "Prasad", city: "vizag" };
// // const server = app.createServer((req, res) => {
// //   const purl=url.parse(req.url,true)
// //   console.log(purl.query.tickets)
// //   if (req.method == "GET") {
// //     if (req.url == "/home") {
// //       res.writeHead(201, "responsive received", {
// //         "content-type": "application/json",
// //       });
// //       res.write("Welcome to home page");
// //       res.end();
// //     } else if (req.url == "/about") {
// //       res.writeHead(201, "responsive received", {
// //         "content-type": "application/json",
// //       });
// //       res.write("Welcome to About page");
// //       res.end();
// //     } else {
// //       res.writeHead(201, "responsive received", {
// //         "content-type": "application/json",
// //       });
// //       res.write("Welcome to other page");
// //       res.end();
// //     }
// //   } else {
// //     res.end("invalid request");
// //   }
// // });
// const server=app.createServer((req,res)=>{
//     const purl=url.parse(req.url,true)
//      console.log(purl)
//     if(purl.method=="GET"){
//         if(purl.pathname=="/veg/gobi"){

//         }
//     }
//     else{
//         res.writeHead(404, "RequestNotFound",)
//         res.end("Invalid Request")
//     }
// })
// server.listen("3201", () => {
//   console.log("it's Working");
// });
const http = require("http");
const url = require("url");

const menu = {
  veg: {
    gobi: 150,
    paneer: 200,
    mushroom: 180,
  },
  nonveg: {
    chicken: 250,
    mutton: 400,
    fish: 300,
  },
};
const server = http.createServer((req, res) => {
  const purl = url.parse(req.url, true);
//   console.log(purl);
  if (req.method === "GET") {
    const pathParts = purl.pathname.split("/").filter(Boolean);
    if (pathParts.length === 2) {
      const category = pathParts[0]; 
      const dish = pathParts[1]; 
      if (menu[category] && menu[category][dish]) {
        const quantity = parseInt(purl.query.quantity) || 1;
        const unitPrice = menu[category][dish];
        const price = quantity * unitPrice;
        const gst = price * 0.05; 
        const totalPrice = price + gst;
        const response = {
          category: category,
          item: dish,
          quantity: quantity,
          price: `${quantity} x ${unitPrice}`,
          gst: "5%",
          total_price: totalPrice.toFixed(2),
          message: "Thank you for your order",
        };
        res.writeHead(200,"Dish Found", { "Content-Type": "application/json" });
        res.end(JSON.stringify(response));
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Dish not found");
      }
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Invalid Request");
    }
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
  }
});
// server.listen(3201, () => {
//   console.log("Server is running on http://localhost:3201");
// });
