//const http =require("http");
// plain text
// const server=http.createServer((req,res)=>{


// res.writeHead(200,{
//     "content-type":"plain/text"
// });
// res.end("hello");
// });
// server.listen(8000,()=>{
//     console.log("server is running");

// });


 
//How to render HTML page  using Node.js ?

 const http =require("http");
// const server=http.createServer((req,res)=>{
// if(req.url==="/"){
//     res.writeHead(200,{
//         "content-type":"text/html",
//     });
//     res.end("<h1>Hello World</h1><p>This is my first server using Node.js</p>");
// }
// else if(req.url==="/about"){
//     res.writeHead(200,{
//         "content-type":"text/html",
//     });
//     res.end("<h1>About Page</h1><p>This is the about page of my first server using Node.js</p>");
// }
// });
// server.listen(8000,()=>{
//     console.log("server is running on port 8000");
// });


//js objects
let user={
    username:"shreyal",     // in this key:value pair is going this is object 
    email:"shreyal@gmail.com"

}


//  json objects
// let json={
//    "username ":"shreyal",
//     "email":"shreyal@gmail.com"

// } // in json we pass both as strings this is the format of json
// JSON.stringify(user) js object->json string
// JSON.parse() json string->json data 

const server=http.createServer((req,res)=>{
    res.writeHead(200,{
        "content-type":"application/json"
    });
   // res.end(user);
   res.end(JSON.stringify({
    abc:"shreyal",user
   }));
});

server.listen(8000,()=>{
    console.log("server is running on port 8000");
});