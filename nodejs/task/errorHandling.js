// common errors
// enoent=file not exist
// eacces=permission denied 
// eexit=file already exist
// eisdir=file expected,folder does not exist


// error handling with useCallback
// const { log } = require('console');
 const fs=require('fs');
// fs.readFile("./file.txt","utf-8",(err,data)=>{
//     if(err){
//         if(err.code==="ENOENT"){
//             console.log("File not found");
            
//         }
//         return ;
//     }
//     console.log(data);
    

// });





// error handling with async await  we use try cath when we use this 
// const fsPromises =require('fs').promises;
// async function readFileSafe() {
//     try{
//         const data=await fsPromises.readFile("./sample.txt","utf-8");
//         console.log(data);  
//     }
//     catch(err){
//         console.log("error",err.code);
        
//     }
    
// }





// Stream error handling 

const readStream=fs.createReadStream("./sample.txt"); //source file 
const writeStream=fs.createWriteStream("./example.txt"); //destination file 
readStream.on("error",(err)=>{
    console.log("read error ",err.message);
    writeStream.destroy();
    
});

writeStream.on("error",(err)=>{
    console.log("read error ",err.message);
    readStream.destroy();
});