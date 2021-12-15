var events=require('events');
const { listeners } = require('process');
var eventEmitter = new events.EventEmitter();
//var countListeners=0;
var listener1=function listerner1(){
    console.log("Listener 1 is executed");
    //countListeners++;
};

var listener2=function listener2(){
    console.log("Listener 2 is executed");
    //countListeners++;
};

eventEmitter.on ('myevent',listener1);
eventEmitter.on ('myevent',listener2);
eventEmitter.emit('myevent');
//eventEmitter.emit(countListeners);

console.log(eventEmitter.listenerCount('myevent'));
console.log(eventEmitter.listeners('myevent'));

eventEmitter.removeListener('myevent',listener2);
console.log(eventEmitter.listenerCount('myevent'));
console.log(eventEmitter.listeners('myevent'));


