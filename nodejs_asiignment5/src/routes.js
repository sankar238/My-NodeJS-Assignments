var http = require("http");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
  // Define the routes and their responses
  const routes = {
    '/welcome': {
      contentType: 'text/plain',
      statusCode: 200,
      response: 'Welcome to Dominos!'
    },
    '/contact': {
      contentType: 'application/json',
      statusCode: 200,
      response: {
        phone: '18602100000',
        email: 'guestcaredominos@jublfood.com'
      }
    }
  };

  // Set default response to 404
  let response = {
    contentType: 'text/plain',
    statusCode: 404,
    response: 'Not Found'
  };

  // Check if the requested URL is in the routes object
  if (routes[req.url]) {
    response = routes[req.url];
  }

  // Set the response headers
  res.setHeader('Content-Type', response.contentType);
  res.statusCode = response.statusCode;

  // Send the response
  if (response.contentType === 'application/json') {
    res.end(JSON.stringify(response.response));
  } else {
    res.end(response.response);
  }
}

// Start the server and listen on port 8081
httpServer.listen(8081, () => {
  console.log('Server is listening on port 8081');
});
