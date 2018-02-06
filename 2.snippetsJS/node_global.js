/*

  path module, __filename, __dirname, path.basename(__filename)


*/



var path = require("path");

console.log(`Rock on World from ${path.basename(__filename)}`);


//=> global.js


//full current directory path. (ex: ...start/)
console.log(__dirname + '\n');
//=> /Users/stework/Public/node/exercise-files/Ch03/03_01/start


//full current path to file. (ex: ...start/global.js)
console.log(__filename + '\n');
//=> /Users/stework/Public/node/exercise-files/Ch03/03_01/start/global.js


