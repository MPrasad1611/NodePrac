const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
  if (req.method == "GET") {
    const parsedurl = url.parse(req.url, true);
    console.log(parsedurl);
    if (parsedurl.pathname == "/menu") {
      res.writeHead(200, "ok", { "content-type": "application/json" });
      res.write(
        JSON.stringify({
          veg: [{ panner: "150rs", gobi: "120rs" }],
          nonveg: [{ chicken: "225rs", fish: "240rs" }],
          message: "thankyou for order",
        })
      );
      res.end();
    } else if (parsedurl.pathname == "/menu/veg") {
      if (parsedurl.query.item == "panner") {
        res.writeHead(200, "ok", { "content-type": "application/json" });
        res.write(
          JSON.stringify({
            category: "veg",
            item: parsedurl.query.item,
            price: parsedurl.query.quantity * 150,
            message: "thankyou for order",
          })
        );
        res.end();
      } else if (parsedurl.query.item == "gobi") {
        res.writeHead(200, "ok", { "content-type": "application/json" });
        res.write(
          JSON.stringify({
            category: "veg",
            item: parsedurl.query.item,
            price: parsedurl.query.quantity * 120,
            message: "thankyou for order",
          })
        );
        res.end();
      } else {
        res.writeHead(400, "not found", { "content-type": "application/json" });
        res.write(JSON.stringify({ message: "item not available" }));
        res.end();
      }
    } else if (parsedurl.pathname == "/menu/nonveg") {
      res.writeHead(200, "ok", { "content-type": "application/json" });
      res.write(
        JSON.stringify({ category: "nonveg", message: "thankyou for order" })
      );
      res.end();
    }

    res.end();
  } else if (req.method == "post") {
    res.write("post request is not ready yet");
    res.end();
  } else {
    res.write("invalid request");
    res.end("");
  }
});

server.listen(3221, () => {
  console.log("Server is running ");
});
