//Question 6 and 7

var readLine=require('readline-sync');
var data1="";
data1=readLine.question("Enter a string");
var fs=require("fs");
fs.readFile('input.txt',function(err,data){
    stringFound=false;
    var str=data.toString();
    var strarray=str.split(" ");
    var stringFoundCount=0;
    for(var i=0;i<strarray.length;i++)
    {
        if(strarray[i].toLowerCase()===data1.toLowerCase())
        {
            stringFound=true;
            stringFoundCount++;
        }
    }
    if(stringFound==true)
    {
        console.log("string was found");

    }
    console.log("The no of occurences of search string",stringFoundCount);
    if(stringFound==false)
    {
        console.log("String not found")
    }

})