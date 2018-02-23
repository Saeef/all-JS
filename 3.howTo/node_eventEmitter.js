/*
    the event emitter is nodejs implementation of the pub/sub design pattern, and it
    allow us to create listeners for an emit custom Events (1)

    event emitters rarely use as a stand alone function.
    better used by allowing objects to inherit the event emitter (2)

*/

//(1)
var events = require('events');

//new instance of event emitter object
var emitter = new events.EventEmitter();

emitter.on('customEvent', function(message,status) {
    
    console.log(`${status}: ${message}`);

    //returns
    //=> 200: Hellow World


});

emitter.emit('customEvent', 'Hellow World', 200);



//(2)




var EventEmitter = require('events').EventEmitter;

//util has a inheritance fn
var util = require('util');



//we want person to inherit it
var Person = function(name) {
    this.name = name;

};


util.inherits(Person, EventEmitter);


var person1 = new Person('Luis Suarez');

//listening for when luis speaks -
//if a speak event is raised, this callback fn will be used to handle it and
//whatever luis said will be passed to this fn

person1.on('speak', function(said) {

    console.log(`${this.name}: ${said}`);

});

//luis also has an emit fn so he can also emit a speak event

//any event listening for the speak event will fire their custom callbacks (line58)
person1.emit('speak', "you may delay but time will not");



/*
 returns

 200: Hellow World
Luis Suarez: you may delay but time will not



*/
