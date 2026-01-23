const http = require("http");
const fs= require ("fs");

const myServer=http.createServer((req,res) => {
    let responseText="";

    switch(req.url)
    {
        case "/":
            responseText="this is home page ";
            break;
        
        case "/about":
            responseText="this is about page ";
            break;
        case "/contact":
            responseText="this is contact page ";
            break;

        default:
            responseText="error invalid input ";
            break;

    }
    const log =`${Date.now()} | ${req.url} | ${responseText}\n`;
    fs.appendFile("example.txt", log,(err)=> {
        if(err) {
            console.error("error is logging");
        }
    });
    res.end(responseText);


    });
    myServer.listen(9000,'localhost' ,() => console.log('server is running on port 9000'));


