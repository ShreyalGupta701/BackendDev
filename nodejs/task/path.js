// "c:\\user....."

// path.join("user","shreyal",..) -> SafeArray,clean code , cross platform

// const path=require("path");
// const filePath="/user/admin/docs/report.pdf";
// console.log(path.basename(filePath));


const path=require("path");
console.log("File name ",path.basename(__filename));
console.log("folder name ",path.dirname(__filename));
console.log("extension  ",path.extname(__filename));

const fullPath=path.join(__dirname,"public","index.html");
console.log("Full Path:",fullPath);