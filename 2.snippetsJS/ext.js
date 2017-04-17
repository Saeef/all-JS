;(function(andRedEyelikeHAYS, undefined) {
    'use strict';
    debugger;
    var SL = {};
    SL.andRedEyelikeHAYS = {
        init: function() {
            this.preloader();
            this.pageCss();
            this.searchBox();
            this.mobileEle();
            this.resize();
            this.preloaderOff();
            this.endOf();
        },

        preloader: function() {
            console.info(
                "%c css \u221a",
                "color:white;background:blue;padding:3px 5px;border-radius:5px;line-height:24px;"
            );//‹console····•
            var loader = document.getElementsByTagName("body")[0];
            loader.style.width = window.innerWidth + "px";
            loader.style.height = window.innerHeight + "px";
            loader.style.top = window.pageYOffset + "px";
            loader.style.left = window.pageXOffset + "px";
            loader.style.backgroundColor = "rgba(0,0,0,.7)";
            var c = document.createElement("div");
            //div#overlay·ele·styles
            (c.id = "overlay"), document.body.appendChild(c);
            c.style.position = "absolute";
            c.style.top = "0";
            c.style.left = "30%";
            c.style.backgroundColor = "rgba(0,0,0,0.7)";
            c.style.cursor = "pointer";
            c.style.width = window.innerWidth + "px";
            c.style.height = window.innerHeight + "px";
            c.style.top = window.pageYOffset + "px";
            c.style.left = window.pageXOffset + "px";
            //.loaderSL-css
            var bstyle = document.createElement("style");
            bstyle.type = "text/css";
            bstyle.innerHTML = ".loaderSL-css {position:absolute; top:50%; left:50%;margin:0px border-radius:50%;border-width:24px; border-style:solid;background-color:rgba(243,255,53,0.701);}";
            bstyle.innerHTML = "div#overlay::after {content:'it may well be your internet'; font-size:46px; line-height:60px; position:absolute; right:-70%;bottom:50%; padding:8em 0 0 12em; color:#21334a;text-shadow:20px 20px 16px black; text-transform:uppercase;transform: skewY(-182deg);top:55%;top:55%;botom:10%; color:#cde0f7;transition:all .5s;left:45%;}";
            document.getElementsByTagName("head")[0].appendChild(bstyle);
            //.preloader·css·img
            var style = document.createElement("style");
            style.type = "text/css";
            style.innerHTML += "<style type='text/css'>width:100%;@-webkit-keyframes uil-ripple{0%{width:0;height:0;opacity:0;margin:0}33%{width:44%;height:44%;margin:-22% 0 0 -22%;opacity:1}100%{width:88%;height:88%;margin:-44% 0 0 -44%;opacity:0}}@-webkit-keyframes uil-ripple{0%{width:0;height:0;opacity:0;margin:0}33%{width:44%;height:44%;margin:-22% 0 0 -22%;opacity:1}100%{width:88%;height:88%;margin:-44% 0 0 -44%;opacity:0}}@-moz-keyframes uil-ripple{0%{width:0;height:0;opacity:0;margin:0}33%{width:44%;height:44%;margin:-22% 0 0 -22%;opacity:1}100%{width:88%;height:88%;margin:-44% 0 0 -44%;opacity:0}}@-ms-keyframes uil-ripple{0%{width:0;height:0;opacity:0;margin:0}33%{width:44%;height:44%;margin:-22% 0 0 -22%;opacity:1}100%{width:88%;height:88%;margin:-44% 0 0 -44%;opacity:0}}@-moz-keyframes uil-ripple{0%{width:0;height:0;opacity:0;margin:0}33%{width:44%;height:44%;margin:-22% 0 0 -22%;opacity:1}100%{width:88%;height:88%;margin:-44% 0 0 -44%;opacity:0}}@-webkit-keyframes uil-ripple{0%{width:0;height:0;opacity:0;margin:0}33%{width:44%;height:44%;margin:-22% 0 0 -22%;opacity:1}100%{width:88%;height:88%;margin:-44% 0 0 -44%;opacity:0}}@-o-keyframes uil-ripple{0%{width:0;height:0;opacity:0;margin:0}33%{width:44%;height:44%;margin:-22% 0 0 -22%;opacity:1}100%{width:88%;height:88%;margin:-44% 0 0 -44%;opacity:0}}@keyframes uil-ripple{0%{width:0;height:0;opacity:0;margin:0}33%{width:44%;height:44%;margin:-22% 0 0 -22%;opacity:1}100%{width:88%;height:88%;margin:-44% 0 0 -44%;opacity:0}}.loaderSL-css{background:0;position:relative;width:200px;height:200px}.loaderSL-css div{position:absolute;top:50%;left:50%;margin:0;width:0;height:0;opacity:0;border-radius:50%;border-width:24px;border-style:solid;-ms-animation:uil-ripple 2s ease-out infinite;-moz-animation:uil-ripple 2s ease-out infinite;-webkit-animation:uil-ripple 2s ease-out infinite;-o-animation:uil-ripple 2s ease-out infinite;animation:uil-ripple 2s ease-out infinite}.loaderSL-css div:nth-of-type(1){border-color:#f7af9f}.loaderSL-css div:nth-of-type(2){border-color:#53a6e3;-ms-animation-delay:1s;-moz-animation-delay:1s;-webkit-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}</style>";
            //.append·to·head
            document.getElementsByTagName("head")[0].appendChild(style);
        }, //‹›°°····¬¬¬¬¬•preloader,overlay loaded•••··

        pageCss: function() {
            console.info(
                "%c css \u221a",
                "color:white;background:green;padding:3px 5px;border-radius:5px;line-height:24px;"
            );//‹console····•
            var style = document.createElement("style");
            style.type = "text/css";
            //.clearfix
            style.innerHTML += ".clearfix:after {visibility:hidden;display:block;font-size:0;content:'';clear:both;height:0;}";
            style.innerHTML += ".clearfix {display:inline-block;}";
            style.innerHTML += "* html .clearfix {height: 1%;}";
            style.innerHTML += ".clearfix {display:block;}";
            //.mobile·982‹-›992px·not·tablet
            style.innerHTML += "@media screen and (min-device-width:768px) and (max-device-width:992px) { #Job_Search .col.col-3 {width:30%;} #Job_Search .action {position:absolute; top:43px; right: 220px !important;} .underline { width:80% !important;}}\n";
             //.mobile·480‹-›980
            style.innerHTML += "@media screen and (min-device-width:480px) and (max-device-width:980px) { #searchBox {display:none;}}\n";
             //.mobile·max·480
            style.innerHTML += "@media screen and (max-device-width:480px) and (orientation:portrait) { }\n";
            //.append to head
            document.getElementsByTagName("head")[0].appendChild(style);
        }, //°•······ ›endºƒPageÇss ···¬

        preloaderOff: function() {
            console.info(
                "%c preloaderOff \u221a",
                "color:white;background:blue;padding:3px 5px;border-radius:5px;"
            ); //‹console····•
            window.document.body.classList.remove("loaderSL-css");
            //.removes·overlay·div··bottom-pg
            var over = document.getElementById("overlay");
            over.parentElement.removeChild(over);
            //.remove·js·styles·added·to·body··top-pg
            var loader = document.getElementsByTagName("body")[0];
            loader.style.width = "";
            loader.style.height = "";
            loader.style.top = "";
            loader.style.left = "";
            loader.style.backgroundColor = "";
        }, //°•······ ›preloaderØƒƒ ¬¬ °

        searchBox: function() {
            console.info(
                "%c searchBox \u221a",
                "color:white;background:blue;padding:3px 5px;border-radius:5px;line-height:24px;"
            ); //‹console····•
        }, //°•······ ›searchBøx ¬¬ °

        mobileEle: function() {
            console.info(
                "%c mobileEle \u221a",
                "color:white;background:green;padding:3px 5px;border-radius:5px;line-height:24px;"
            ); //‹console····•

        }, //°•······ ›mobileEle ¬¬ °

        resize: function() {
            console.info(
                "%c resize \u221a",
                "color:white;background:blue;padding:3px 5px;border-radius:5px;line-height:24px;"
            ); //‹console····•
   
        }, //°•······ ›resize ¬¬ °

        endOf: function() {
            console.info(
                "%c °·en∂Øƒ•° \u221a",
                "color:red;background:black;padding:3px 5px;border-radius:5px;margin:5px 0;line-height:24px;"
            );//‹console····•
   

        } //°•······ ›endºƒ •–––ı

    }; //°···endºƒ·SL.andRedEyelikeHAYS °•∞∞·©

    (function() {
        setTimeout(
            function() {
                SL.andRedEyelikeHAYS.init();
            },
            1500
        ); //°fireØƒƒ.init
    })();
}.call(window.andRedEyelikeHAYS || {}));
