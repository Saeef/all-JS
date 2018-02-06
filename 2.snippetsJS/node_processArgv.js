/*

  process.argv, ${}, ``


*/






console.log(process.argv);
// =>[ '/usr/local/bin/node',
//   '/Users/stework/Public/node/exercise-files/chap3/processArgv.js' ]

function readflag(flag) {
    var ix = process.argv.indexOf(flag);
    var flag = (ix > -1) ? process.argv[ix+1] : null;
    return flag;
}

//user
var user = readflag('--user');
//greeting
var greeting = readflag('--greeting');




if (user == undefined) {

    console.log(`no user sorry`);

    if(greeting !== undefined) {
        console.log(`..but we have this greeting: ${greeting}`);
    }    
}

if (greeting == undefined) {

    console.log(`no greeting sorry`);

    if(user !== undefined) {
        console.log(`..but we have a user, please welcome: ${user}`);
    }    
}

else if(process.argv.indexOf(user) > -1 && process.argv.indexOf(greeting) > -1) {

    console.log(`we have a user, please welcome: ${user}, and we have this greeting: ${greeting}`);
}




/*

    process.argv is an array and contains a path to node (where the executables are) and
    a path to current working file directory

=> [ '/usr/local/bin/node',
  '/Users/stework/Public/node/exercise-files/chap3/03_02/start/app' ]
*/



// ex:
//     > node app.js --user Mark --greeting "Good day"

//     => // aside from the path
//        // also: a user flag and value, greeting flag and value

//        [....
    
//     => '--user',
//         'George',

//         '--greeting',
//         'Good day'  ]

