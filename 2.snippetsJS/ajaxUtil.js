(function(global) {

//namespace to attach things to global
var ajaxUtil = {};

//return HTTP Request Obj/ not avail to global
function getRequestObject() {
   if(window.XMLHttpRequest) {
      return new XMLHttpRequest();
   }//if
   else if(window.ActiveXObject) {
      //old IE
      return new ActiveXObject("Microsoft.XMLHTTP");
   }//else
   else {
      global.alert("Ajax is not supported");
      return null;
   }

}//getRequestObject


//Ajax GET request 
ajaxUtil.sendGetRequest = 
   function(requestUrl, responseHandler) {
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
   };//fn


//Only calls user provided responseHandler
function handleResponse(request, responseHandler) {
   if((request.readyState == 4) &&
      (request.satus == 200)) {
      responseHandler(request);
   }//if
}//fn


//Expose utility to global object ot use it
global.$ajaxUtil = ajaxUtil;




})(window);
