(function(global) {

//namespace to attach things to global
var ajaxScatola = {};

//return HTTP Request Obj/ not avail to global
function getRequestObject() {
   if(window.XMLHttpRequest) {
      return new XMLHttpRequest();
   }//if
   else if(window.ActiveXObject) {
      //old IE
      return new ActiveXObject("Microsoft.XMLHTTP");
   }//else-if
   else {
      global.alert("Ajax is not supported");
      return null;
   }//else

}//getRequestObject fn

//Ajax GET request 
ajaxScatola.sendGetRequest = function(requestUrl, responseHandler) {
      //get request obj
      var request = getRequestObject();
      //onreadystate - when server comesback with response we call handleResponse
      request.onreadystatechange =
         function() {
            handleResponse(request, responseHandler);
         };
      //then open GET
      request.open("GET", requestUrl, true);
      request.send(null);  //for POST only

};//ajax GET request


//Only calls user provided responseHandler
function handleResponse(request, responseHandler) {
   if((request.readyState == 4) &&
      (request.satus == 200)) {
      responseHandler(request);
   }//if
   
}//handleResponse fn
 

//Expose utility to global object ot use it
global.FacingOutAjax = ajaxScatola;

   
   
})(window);


/****************···self-exec fn ended.
·················
···············
·············
···········
··········
·········
·················∏∏∏∏
·················∏◊◊∏=»»»‹Œ—°
·················∏∏∏∏
·········
··········
···········
·············
···············
·················
******************···now-call-it
*/


//Event handler
document.addEventListener('DOMContentLoaded', function(e) {
   //unobstrusive event binding
   document.querySelector('button').
   addEventListener('click', function() {

      //call server to get name
      FacingOutAjax
         .sendGetRequest('name.txt',
            function(request) {
               var name = request.responseText;

               document.querySelector('#content')
              .innerHTML = "<h2>Hello " + name + "!";
            

            });


   }); //click event


}); //DOMContentLoaded fn




/*·self-exec fn ended.
‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡
·······················
‹····Ô···········Ô····›
 ·········™◊™·········
 ·········∞∞∞········
  ······∏∏∏∏∏∏∏·····
    ··············
*/

//Event handling
document.addEventListener('DOMContentLoaded', function(e) {

   //unobstrusive event binding
   document.querySelector('button').
   addEventListener('click', function() {
      //call server to get name
      $ajaxUtil
         .sendGetRequest('/name.txt',
            function(request) {
               var name = request.responseText;
               document.querySelector('#content')
              .innerHTML = "<h2>Hello " + name + "!";

            });//fn

   }); //click event


}); //DOMContentloaded fn




/*· some index.html
‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡
·······················
‹····Ô···········Ô····›
 ·········™◊™·········
 ·········∞∞∞········
  ······∏∏∏∏∏∏∏·····
    ··············
*/


<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="utf-8">
   <script type="text/javascript" src="ajax-util.js"></script>
   <script type="text/javascript" src="script.js"></script>
   <title>Practice test</title>
</head>
<body>
   <h1 id="title">ajax test</h1>
   <p>
      <button>
         Say hello to someone on the Server!
      </button>
  </p>
   <div id="content">&nbsp;</div>
  

</body>
</html>


/*· whatever data file
‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡‡
·······················
‹····Ô···········Ô····›
 ·········™◊™·········
 ·········∞∞∞········
  ······∏∏∏∏∏∏∏·····
    ··············
*/

 >> whatever data or stefano works  //.TXT,JSON,XML

