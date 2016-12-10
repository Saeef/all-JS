/* ---------------------------------------------------------

This object is useful when you want to load external javascript files only after the last one was loaded.

Sort of in a chainable js lib - where every new file will be loaded only 
when the previous one including dependencies have already been loaded.

------------------------------------------------------------- */

// Example files on bottom or you'll get a bunch of undefines. 
// Declares and sets scriptLoader var. Then makes sure scriptLoader.load method exists
// Files:
// You need to call External JS files first 




var scriptLoader = {


    _loadScript: function (url, callback) {

        var head = document.getElementsByTagName('head')[0];

        var script = document.createElement('script');
       
        script.type = 'text/javascript';

        script.src = url;


        if (callback) {

            script.onreadystatechange = function () {

                if (this.readyState == 'loaded') callback();

            }//onreadystatechange

            script.onload = callback;

        }//if callback

        head.appendChild(script);


    },//loadScript


    load: function (items, iteration) {

        if (!iteration) {

            iteration = 0;
        }//if

        if (items[iteration]) {

            scriptLoader._loadScript(items[iteration],function () {
                    
                scriptLoader.load(items, iteration+1);


                }
            )//scriptLoader._load...

        }// if

    }//load

}//scriptLoader



/*
--------------------------------------------------------------
Example

Here shows how to load jQuery and only once its fully loaded 
will load jQuery UI, and when that's done “myscript.js”.

------------------------------------------------------------- */


scriptLoader.load([

    'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js',
    'https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js',
    'js/myscript.js'


]);


