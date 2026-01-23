// it is chuncks of data 
// types: Readable Stream,write and transform 

// read stram
//  const fs=require("fs");
// const readStream=fs.createReadStream("./file.txt",{
//     encoding:"utf-8",
//     highWaterMark:64*1024
// });
// readStream.on("data",(chunk)=>{
//     console.log("chunk received ",chunk.length);
    
// });
// readStream.on("end",()=>{
//     console.log("file reading complete");
    
// });




// write stram
// const  writeStream=fs.createWriteStream("./sample.txt");
// writeStream.write("hello gla\n");
// writeStream.write("welcome to Stram ");
// writeStream.end();


//creating file with write stream
// const fs = require('fs');
// const writeStream = fs.createWriteStream('./output.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 }); //16KB    
// writeStream.write("This is the first line of the output file.\n");
// writeStream.write("This is the second line of the output file.\n");
// writeStream.write("This is the third line of the output file.\n");
// writeStream.end("File write operation completed.\n");
// writeStream.on('finish', () => {
//     console.log('Data written to file successfully.');
// }
// );




//transform stream
// const {Transform}=require("stream");
// const upperCaseTransform=new Transform({
// transform(chunk,encoding,callback){
//     const modifiedData=chunk.toString().toUpperCase();
//     this.push(modifiedData);
//     callback;
// }
// })

// //pipeflow
// fs.createReadStream("./sample.txt")
// .pipe(upperCaseTransform)
// .pipe(fs.createWriteStream("./log.txt"));




//filecopy using pipe method from sample file to output file
 
    // const fs = require('fs');
    // const readStream = fs.createReadStream('./sample.txt');
    // const writeStream = fs.createWriteStream('./output.txt');
    // readStream.pipe(writeStream);
    // console.log('File copied successfully using pipe method.');



    //making the first letter capital
    const fs = require("fs");
const { Transform } = require("stream");

let makeNextCapital = true;   // to track when we need capital letter

const sentenceTransform = new Transform({
  transform(chunk, encoding, callback) {

    let text = chunk.toString();
    let result = "";

    for (let i = 0; i < text.length; i++) {
      let char = text[i];

      if (makeNextCapital && /[a-zA-Z]/.test(char)) {
        result += char.toUpperCase();
        makeNextCapital = false;
      } else {
        result += char;
      }

      // If we see a full stop → next alphabet should be capital
      if (char === ".") {
        makeNextCapital = true;
      }
    }

    this.push(result);
    callback();
  }
});

// pipe flow
fs.createReadStream("./sample.txt")
  .pipe(sentenceTransform)
  .pipe(fs.createWriteStream("./log.txt"));
