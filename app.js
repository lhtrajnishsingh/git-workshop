const http = require("http");

http
  .createServer(function (req, res) {
    res.write("Hello World from new-feature!");
    res.end();
  })
  .listen(3000, function () {
    console.log("server start at port 3000");
  });
