var fs = require('fs');
var data = "Input data using writestream "
var writestream = fs.createWriteStream('input1.txt');
writestream.write(data);

writestream.on('finish',()=>{
    console.log(data);
})
writestream.on('error',(err)=>{
    console.log(err);
})