//file system module

var fs = require("fs");
var path = require("path");

//read a file
fs.readFile("./lib/fileone.md", "UTF-8", function(err, file) {

    if(err) {
        console.log(err);

    }   

    console.log(file);

});


//read all files
fs.readdir("./lib", function(err, files) {

	files.forEach(function(fileName) {
		var file = path.join(__dirname, "lib", fileName);
		var stats = fs.statSync(file);
		if(stats.isFile() && fileName !== ".DS_Store") {

            //second arg is encoding to get text back    
			fs.readFile(file, "UTF-8", function(err, contents) {

				console.log(contents);

			});

		}
	});

});


//without a UTF encoding you'll get binary data with a buffer(node buffer class)
/*
<Buffer 42 65 6e 20 46 72 61 6e 6b 6c 69 ... >
*/
