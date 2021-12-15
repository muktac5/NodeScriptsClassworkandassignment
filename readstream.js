var fs=require("fs");
var fileData ="";
var readerStream = fs.createReadStream('input.txt');
readerStream.addListener('data',function(readData){
    fileData=readData;
})

readerStream.addListener('end',function(){
    console.log("Read data :"+fileData);
})

readerStream.addListener('error',function(err){
    console.error("Error is "+err);
})