/*

basic export/require node statement

var Person = function(name) {
    this.name = name;
};
...
....

//like a javascript public fn or method

module.exports = Person;       
                                    
*/


//then run a require statement

var Person = require("./lib/Person");    
                                         
var ben = new Person("Ben Franklin");

george.on('speak', function(said) {

	console.log(`${this.name} -> ${said}`);

});

ben.emit('speak', "You may delay, but time will not.");

