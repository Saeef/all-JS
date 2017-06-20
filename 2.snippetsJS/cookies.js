/*
	create/update cookie
	--------------------
	First 2 parameters are required. The others, if supplied, must be passed in the order listed above.
	To omit an unused optional field, use null as a place holder.
	ex.
		setCookie('mycookie', 'hello', null, '/');			//first 2 only required

	ex. 
		to set a secure cookie for path '/' that expires after current session:

			setCookie('mycookie', 'hello', null, '/', null, true);

*/

function SetCookie (name,value,expires,path,domain,secure) {
     document.cookie = name + "=" + escape (value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
  }






//gets cookie name
function GetCookie (name) {
   var arg = name + "=";
   var alen = arg.length;
   var clen = document.cookie.length;
   var i = 0;
   while (i < clen) {
      var j = i + alen;
      if (document.cookie.substring(i, j) == arg) {
         return getCookieVal (j);
      }
      i = document.cookie.indexOf(" ", i) + 1;
      if (i == 0) {
         break;
      }
   }
   return null;
}





/*
	delete cookie
	--------------------

	Function to delete a cookie. (Sets expiration date to start of epoch)
	   name -   String object containing the cookie name
	   path -   String object containing the path of the cookie to delete.  This MUST
                be the same as the path used to create the cookie, or null/omitted if
                no path was specified when creating the cookie.
	            domain - String object containing the domain of the cookie to delete.  This MUST
                be the same as the domain used to create the cookie, or null/omitted if
	            no domain was specified when creating the cookie.

	First 2 parameters are required. The others, if supplied, must be passed in the order listed above.
	To omit an unused optional field, use null as a place holder.
	ex.
		setCookie('mycookie', 'hello', null, '/');			//first 2 only required

	ex. 
		to set a secure cookie for path '/' that expires after current session:

			setCookie('mycookie', 'hello', null, '/', null, true);

*/


 function DeleteCookie (name,path,domain) {
     if (GetCookie(name)) {
        document.cookie = name + "=" +
           ((path) ? "; path=" + path : "") +
           ((domain) ? "; domain=" + domain : "") +
           "; expires=Thu, 01-Jan-70 00:00:01 GMT";
     }
  }
