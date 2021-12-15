var dns  = require('dns');
var hostname = require('os');
var read_line = require('readline-sync');
var input_data = read_line.question("Enter the URL")
dns.lookup(input_data,(err,address,family)=>{
    console.log("address",address)
    console.log("family",family)
})

dns.resolve4(input_data,(err,address)=>{
    if (err) throw err;
    console.log("The ip addresses of ",JSON.stringify(address));

    address.forEach((a)=>{
        dns.reverse(a,(err,hostname)=>{
            if (err) throw err;
            console.log(a,hostname)
        })
    })
})