// const http=require('http');
// const fs=require('fs');

// const myserver=http.createServer((req,res)=>{
//     //console.log('new Request recieved');
//     //console.log("new req Rec."")
//    // res.end('hello from server');
//    //console.log(req);

//    const log = `${Date.now()} - ${req.method} ${req.url}\n`;
//    console.log(log.trim());
//    fs.appendFile("log.txt", log, (err) => {
//          if(err) throw err;
//    });
//    res.end('hello from server shreyal pragati');
// });

// myserver.listen(8000,'localhost', () => console.log('Server is running on port 8000'));








// const http = require('http');
// const fs = require('fs');

// const myserver = http.createServer((req, res) => {

//     // logging
//     const log = `${Date.now()} - ${req.method} ${req.url}\n`;
//     console.log(log.trim());
//     fs.appendFile("log.txt", log, (err) => {
//         if (err) throw err;
//     });

//     // routing
//     if (req.url === "/" && req.method === "GET") {
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end("Welcome to the Home Page");

//     } else if (req.url === "/about" && req.method === "GET") {
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end("This is the About Page");

//     } else if (req.url === "/contact" && req.method === "GET") {
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end("This is the Contact Page");

//     } else {
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         res.end("404 Page Not Found");
//     }
// });

// myserver.listen(8000, 'localhost', () => {
//     console.log('Server is running on port 8000');
// });




const http = require('http');
const fs = require('fs');

const myserver = http.createServer((req, res) => {

    let message = "";

    if (req.url === "/" && req.method === "GET") {
        message = "Welcome to the Home Page";

    } else if (req.url === "/about" && req.method === "GET") {
        message = "This is the About Page";

    } else if (req.url === "/contact" && req.method === "GET") {
        message = "This is the Contact Page";

    } else {
        message = "404 Page Not Found";
    }

    const log = `${new Date().toLocaleString()} - ${req.method} ${req.url} - ${message}\n`;
    console.log(log.trim());

    fs.appendFile("log.txt", log, (err) => {
        if (err) console.error("Log error:", err);
    });

    if (message === "404 Page Not Found") {
        res.writeHead(404, { "Content-Type": "text/plain" });
    } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
    }

    res.end(message);
});

myserver.listen(8000, 'localhost', () => {
    console.log('Server is running on port 8000');
});
