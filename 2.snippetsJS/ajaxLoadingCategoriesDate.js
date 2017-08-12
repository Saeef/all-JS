/*

scatolaUtils.js

data.json at heroku

snipper and data from external heroku url

<div class="col-md-3 col-sm-4">
   <a href="#" onclick="$dc.loadMenuItems('{{short_name}}');">
      <div class="category-title">
            <img width="200" height="200" src="images/menu{{short_name}}/{{short_name}}.jpg">
            <span>{{name}}</span>      
      </div>
</div>


*/


(function(global) {

   global = {};

   var homeHtml = "snippets/home-snippet.html";
   var allCategoriesUrl = 
      "http://davids-restaurant.herokuapp.com/categories.json";
   var categoriesTitleHtml = "snippets/categories-title-snippet.html";
   var categoryHtml = "snippets/category-snippet.html";

   //convinience fun for inserting innerHtml for 'select'
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

   //return substitue of '{{propName}}'
   //with propValue in given string
   var insertProperty = function(string,propName, propValue) {
      var propToReplace = "{{" + propName + "}}";
      string = string.replace(new RegExp(propToReplace, "g"), propValue);

      return string


   }


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


      //Load the menu categories view
      dc.loadMenuCategories = function() {
         showLoading('#main-content');
         $ajaxUtils.sendGetRequest(
            allCategoriesUrl,
            buildAndShowCategoriesHTML
         );  //true default object

      };


      //Builds html for the categories page based on the date from server
      function buildAndShowCategoriesHTML(categories) {
            //load title snippet of categories page
            $ajaxUtils.sendGetRequest(
            categoriesTitleHtml,
            function(categoriesTitleHtml) {
               //retrieve single category snippet
               $ajaxUtils.sendGetRequest(
                  categoryHtml,
                  function(categoryHtml) {
                       var categoriesViewHtml = buildCategoriesViewHtml(
                           categories,
                           categoriesTitleHtml,
                           categoryHtml
                        ); 
                       insertHtml('#main-content', categoriesViewHtml);

                  },false
               );  //true default object

            },false
         );  //true default object


      }



      //using categories data n snippets html
      //build categories view html to be inserted into page
      function buildCategoriesViewHtml(
                                       categories,
                                       categoriesTitleHtml,
                                       categoryHtml) {

         var finalHtml = categoriesTitleHtml;
         finalHtml += '<section class="row">';

         //loop over categories
         for(var i=0; i<categories.length; i++) {
            //insert categories values
            var html = categoryHtml;
            var name = "" + categories[i].name;
            var short_name = categories[i].short_name;

            html = insertProperty(html, "name", name);

            html = insertProperty(html, "short_name", short_name);

            finalHtml += html;

         }//forloop

         finalHtml += "</section>";

      }





   
   }); //DOMContentLoaded



   global.$dc = dc;












})(window);
