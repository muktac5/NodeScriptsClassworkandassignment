var os = require('os');
var fs= require('fs');
fs.mkdir("Node",()=>{console.log("Folder Created")});
var write_stream = fs.createWriteStream('Node/input.txt');
write_stream.write("");
write_stream.on('finish',()=>{console.log("created")})
write_stream.on('error',(err)=>{console.log(err)})
console.log("File created")
fs.unlink('Node/input.txt',(err,data)=>{
    if (err) throw err;
    console.log("Folder Deleted")})