var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {

    if (req.url === "/welcome") {
       
        res.setHeader("content-type", "text/plain");
        res.statusCode = 200;
        res.end("Welcome to Dominos!");
        // res.status(200).end("Welcome to Dominos!")
    }
    else if(req.url ==="/contact"){
        res.setHeader("content-type", "application/json");
        res.statusCode = 200;
        res.end(JSON.stringify({
            phone: "18602100000",
            email: "guestcaredominos@jublfood.com"
        }));
        // res.json({

        // })
    }
    else{
        res.setHeader("content-type", "text/plain");
        res.statusCode = 404;
        res.end("not found");
    }
}

httpServer.listen(8081, () => console.log("server is at 8081"))
// module.exports = httpServer;