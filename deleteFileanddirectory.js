var fs=require("fs");

/*
fs.unlink('input.txt',function(err){
    if(err)
    throw err;
console.log("File is deleted...");
})


fs.mkdirSync('New Folder');
console.log("new dir created");
*/

fs.rmdirSync('New Folder');
console.log("Directory is deleted ...");