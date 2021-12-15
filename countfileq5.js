var fs=require("fs");
var readLine=require('readline');
var linesCount=0;
const requireFile = async () => {
    const data = fs.readFileSync('./input.txt','utf-8');
    const len=data.length;
    return len;
};
var rl=readLine.createInterface({
    input: fs.createReadStream('./input.txt')
})

rl.on('line',function(line){
    const nWords = line.toString().split(/[\s\n]+/).length
    console.log("The total no of words are:",nWords);
    linesCount++;
});
rl.on('close',function(){
    console.log("The no of lines in the file are :", linesCount);
})

requireFile().then(res=> console.log("No of characters in the file are:",res));