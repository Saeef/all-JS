//execute module
var exec = require("child_process").exec;

//instead of open http://ukrightmove.co.uk from node terminal
exec('open', 'http//:ukrightmove.co.uk');


exec('ls', function(err, stdout) {

    if(err) {
        throw err;
    }

    console.log("Listing Finished");

    console.log(stdout);

});






exec("git version", function(err, stdout) {

	if (err) {
		throw err;
	}

	console.log("Git Version Executed");

	console.log(stdout);

});
