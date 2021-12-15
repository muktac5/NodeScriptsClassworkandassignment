var fs=require("fs");

fs.readFile('input.txt',function(err,data){
    if(err)
    {
        console.log("there is an error");
    }
    else{
        console.log("The data being read asynchronously is :"+data);
    }
})

var data=fs.readFileSync('input.txt')
console.log("Read data in synchronous way :"+data);