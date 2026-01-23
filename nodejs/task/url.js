const url=require("url");
const http=require("http");

const myServer=http.createServer((req,res) => {
    const myUrl =url.parse(req.url,true);
    console.log(myUrl);

switch(myUrl.pathname)
{
    case "/":
        res.end("this is home page ");
        break;
    case "/about":
        const qp=res.end("this is about page ");
        const username=myUrl.query.myname;
        res.end(`hi,${username}`);
        break;
    default:
        res.end("404 page not found ");
    
}
});
 myServer.listen(9000,() => console.log('server is running on port 9000'));
