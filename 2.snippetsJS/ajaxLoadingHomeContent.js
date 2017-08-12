/*
   loading .gif,
   dynamically injecting menu categories (ajax-local files) and data under categories from an external json file
   davids-restaurant.herokuapp.com/categories.json //rest-api
   w/ajaxUtils
*/

(function(global) {

   var dc = {};

   var homeHtml = "snippets/home-snippet.html";

   //fn for inserting innerHTmL for 'select'
   var insertHtml = function(selector,html) {
      var tarEle = document.querySelector(selector);
      tarEle.innerHTmL = html;
   };

   //show loading icon inside element identified by 'selector'
   var showLoading = function(selector) {
      var html = '<div class="text-center">';
      html += '<img src="images/ajax-loader.gif"></div>';

      insertHtml(selector, html);

   };

   //on page load (before images or css)
   document.addEventListener('DOMContentLoaded', function(evt) {
      //need html loaded before being able to get element
      showLoading('main-content');
      $ajaxUtils.sendGetRequest(
            homeHtml,
            function(responseText) {
               document.querySelector('main-content')
                  .innerHTmL = responseText;

            },
            false);   //dont parse as json

      );

   
   }); //DOMContentLoaded



   global.$dc = dc;





})(window);
