//file system module

var fs = require("fs");

//to ready contents of lib directory synchronously
fs.readdir('./lib');    

//assuming i have a folder here named lib, that have files inside of it 

console.log(files);   //i can call all files inside of it this way.
                      //including hidden files like ex: '.DS_Store'

//returns an array
=> ['DS_Store','people.json', 'read.md', 'scripts']                        

//here above 'scripts' is a subdirectory



//just readdir, runs node asynch, but need a callback like here before

fs.readdir('./lib', function(err, files) {

	if (err) {
		throw err;
	}

	console.log(files);

});

console.log("Reading Files...");

//returns an array
=> ['DS_Store','people.json', 'read.md', 'scripts']     

//same exact files as above but asynch you dont get subfolder's files






