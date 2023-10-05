const fs = require("fs");
const http = require("http");


const htmlContent = `
<h1>Hello World</h1>
<p>This is sankar...</p>
`;

fs.writeFile('index.html', htmlContent, (err, data) => { });
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    // res.writeHead(200,{"content-type":"text/html"});
    fs.readFile("index.html", "utf-8", (err, data) => {
        if (err) {
            res.end("failed")
        }
        res.end(data);
    })

});




server.listen(5000, () => console.log("server is runnig at 5000"))