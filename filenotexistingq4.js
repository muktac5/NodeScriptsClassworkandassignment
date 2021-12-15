var fs=require("fs");

fs.readFile('input.txt',function(err,data){
    if(err)
    console.log("Error in reading file"+err);
    else
    console.log("Data in file:"+data);
})