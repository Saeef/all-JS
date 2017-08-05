/*
create/update, delete and get a......Added listCookies fn and testForCookiesAllowIncognitoMode fn. °°°————cookie————°°°°   
========================================================================================================================
- First 2 parameters are required. 
- The others, if supplied, must be passed in the order listed above.
- To omit an unused optional field, use null as a place holder.
-------------------------------------------------------------------
+››› ex.    
+
+	setCookie('mycookie', 'hello', null, '/');	//first 2 only required    
+
+››››ex.      
⁄⁄
⁄⁄	to set a secure cookie for path '/' that expires after current session:
⁄⁄      ˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆ
⁄⁄		setCookie('mycookie', 'hello', null, '/', null, true);
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


function DeleteCookie (name,path,domain) {
     if (GetCookie(name)) {
        document.cookie = name + "=" +
           ((path) ? "; path=" + path : "") +
           ((domain) ? "; domain=" + domain : "") +
           "; expires=Thu, 01-Jan-70 00:00:01 GMT";
     }
}





/**
*   this will return normal for regular browswers 
*   and dont exist for ios incognito devices      
*/
var fs = window.RequestFileSystem || window.webkitRequestFileSystem;
if (!fs) {
   console.log('no exist');
} else {
    fs(window.TEMPORARY, 100,
       function(fs) {
          console.log('normal')
       }, function(err) {
          console.log('incognito');
       }
    );
};


/**
*  List cookies
*/

function listCookies() {
    var theCookies = document.cookie.split(';');
    var aString = '';
    for (var i = 1 ; i <= theCookies.length; i++) {
        aString += i + ' ' + theCookies[i-1] + "\n";
    }
    return aString;
}


