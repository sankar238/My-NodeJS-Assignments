var http = require("http");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
  // Set default response to 404
  let contentType = "text/plain";
  let statusCode = 404;
  let response = "Not Found";

  // Use a switch statement to handle different routes
  switch (req.url) {
    case "/welcome":
      contentType = "text/plain";
      statusCode = 200;
      response = "Welcome to Dominos!";
      break;
    case "/contact":
      contentType = "application/json";
      statusCode = 200;
      response = JSON.stringify({
        phone: "18602100000",
        email: "guestcaredominos@jublfood.com",
      });
      break;
  }

 
  res.setHeader("Content-Type", contentType);
  res.statusCode = statusCode;
  res.end(response);
}

httpServer.listen(8081, () => {
  console.log("Server is listening on port 8081");
});
