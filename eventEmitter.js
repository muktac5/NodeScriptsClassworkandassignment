var events=require('events');
var eventEmitter = new events.EventEmitter();

var listener1=function listerner1(){
    console.log("Listener 1 is executed");
};

var listener2=function listener2(){
    console.log("Listener 2 is executed");
};

eventEmitter.on ('myevent',listener1);
eventEmitter.on ('myevent',listener2);
eventEmitter.emit('myevent');



console.log(eventEmitter.eventNames());