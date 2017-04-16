(function() {
    console.clear();
    debugger;
    //°••º†arge† ºp†iøns·······
    var options = {
        target: "/job/accountancy-finance-jobs/",
        domain: "hays.co.uk"
    };
    //preloader
    function preloader() {
        var URL = options.domain, loader = document.body;
        if (
            options.target === "/job/accountancy-finance-jobs/" &&
            URL === "hays.co.uk"
        ) {
            if (loader === null || loader === "undefined") {
                loader.classList.remove("loaderSL-css");
            } else { //if
                loader.classList.add("loaderSL-css");
            } //else
        } else { //if
            window.setTimeout(preloader, 100);
        } //else
    } //‹›°°····¬¬¬¬¬•preloader•••··

    console.info(
        "%c preloader \u221a ",
        "color:white; background:green; line-height:24px;border-radius:5px; padding:3px; vertical-align:text-top;"
    );
    preloader();
    //externalCookie
    function externalCookie(cookie_file) {
        htmlDoc = document.getElementsByTagName("head")[0];
        js = document.createElement("script");
        js.setAttribute = "text/javascript";
        js.setAttribute = ("src", cookie_file);
        //append this tiny lib
        htmlDoc.appendChild(js);
        //onreadyload »»ie,ff
        js.onreadystatechange = function() {
            if (js.readyState == "complete") {
                console.info(
                    "%c, readyState \u221a",
                    "color:white; background:green; line-height:24px;border-radius:5px; padding:3px; vertical-align:text-top;"
                );
            }
        };
        //onreadyload »»ff
        js.onload = function() {
            console.info(
                "%c, onload \u221a",
                "color:white; background:green; line-height:24px;border-radius:5px; padding:3px; vertical-align:text-top;"
            );
        };
        return false;
    } //‹›°°····¬¬¬¬¬•externalCookie•••··
    //externalCss
    function externalCss(css_file) {
        var html_doc = document.getElementsByTagName("head")[0];
        css = document.createElement("link");
        css.setAttribute = ("rel", "stylesheet");
        css.setAttribute = ("type", "text/css");
        css.setAttribute = ("href", css_file);
        html_doc.appendChild(css);
        //onreadyload »»ie,ff
        css.onreadystatechange = function() {
            if (css.readyState == "complete") {
                console.info(
                    "%c, onreadystatechangeCss \u221a",
                    "color:white; background:green; line-height:24px;border-radius:5px; padding:3px; vertical-align:text-top;"
                );
            }
        };
        //onreadyload »»ff
        css.onload = function() {
            console.info(
                "%c, onloadcss \u221a",
                "color:white; background:green; line-height:24px;border-radius:5px; padding:3px; vertical-align:text-top;"
            );
        };
        return false;
    } //‹›°°····¬¬¬¬¬•externalCss•••··
    //externalScripts
    function externalScripts() {
        var scripts = [
            //scripts
            "https://code.jquery.com/jquery-3.2.1.js",
            "//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"
        ];
        var src;
        var script;
        var pendingScripts = [];
        var firstScript = document.scripts[0];
        // loop through scripts
        while ((src = scripts.shift())) {
            if ("async" in firstScript) {
                script = document.createElement("script");
                script.async = false;
                script.src = src;
                document.head.appendChild(script);
            } //if async
        } //while
    } ///‹›°°····¬¬¬¬¬•externalScripts•••··

    //#•·°·fn calls:
    //1. local file
    externalCookie("cookieLib.js");
    externalCss("cssreset.css");
    //2. url
    externalScripts();
})(); //‹›°°····¬¬¬¬¬•outer fn•••··

(function(andRedEyelikeHAYS, undefined) {
    var SL = {};
    SL.andRedEyelikeHAYS = {
        init: function() {
            this.preloader();
            this.meta();
            this.pageCss();
            this.searchBox();
            this.mobileEle();
            this.resize();
            this.preloaderOff();
            this.endOf();
        },

        meta: function() {
            console.info(
                "%c meta \u221a",
                "color:white;background:brown;padding:3px 5px;border-radius:5px;line-height:24px;"
            );
        },

        preloader: function() {
            //‹console
            console.info(
                "%c css \u221a",
                "color:white;background:blue;padding:3px 5px;border-radius:5px;line-height:24px;"
            );
            //‹⁄°°°°°°°°°°°°°°°°°°°°°°°°°
            var loader = document.getElementsByTagName("body")[0];
            loader.style.width = window.innerWidth + "px";
            loader.style.height = window.innerHeight + "px";
            loader.style.top = window.pageYOffset + "px";
            loader.style.left = window.pageXOffset + "px";
            loader.style.backgroundColor = "rgba(0,0,0,.7)";
            var c = document.createElement("div");
            //div#overlay el & styles.
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
            //°··——— endOf .loaderSl-css.
            //°••••• preloader css img
            var style = document.createElement("style");
            style.type = "text/css";
            style.innerHTML += "<style type='text/css'>width:100%;@-webkit-keyframes uil-ripple{0%{width:0;height:0;opacity:0;margin:0}33%{width:44%;height:44%;margin:-22% 0 0 -22%;opacity:1}100%{width:88%;height:88%;margin:-44% 0 0 -44%;opacity:0}}@-webkit-keyframes uil-ripple{0%{width:0;height:0;opacity:0;margin:0}33%{width:44%;height:44%;margin:-22% 0 0 -22%;opacity:1}100%{width:88%;height:88%;margin:-44% 0 0 -44%;opacity:0}}@-moz-keyframes uil-ripple{0%{width:0;height:0;opacity:0;margin:0}33%{width:44%;height:44%;margin:-22% 0 0 -22%;opacity:1}100%{width:88%;height:88%;margin:-44% 0 0 -44%;opacity:0}}@-ms-keyframes uil-ripple{0%{width:0;height:0;opacity:0;margin:0}33%{width:44%;height:44%;margin:-22% 0 0 -22%;opacity:1}100%{width:88%;height:88%;margin:-44% 0 0 -44%;opacity:0}}@-moz-keyframes uil-ripple{0%{width:0;height:0;opacity:0;margin:0}33%{width:44%;height:44%;margin:-22% 0 0 -22%;opacity:1}100%{width:88%;height:88%;margin:-44% 0 0 -44%;opacity:0}}@-webkit-keyframes uil-ripple{0%{width:0;height:0;opacity:0;margin:0}33%{width:44%;height:44%;margin:-22% 0 0 -22%;opacity:1}100%{width:88%;height:88%;margin:-44% 0 0 -44%;opacity:0}}@-o-keyframes uil-ripple{0%{width:0;height:0;opacity:0;margin:0}33%{width:44%;height:44%;margin:-22% 0 0 -22%;opacity:1}100%{width:88%;height:88%;margin:-44% 0 0 -44%;opacity:0}}@keyframes uil-ripple{0%{width:0;height:0;opacity:0;margin:0}33%{width:44%;height:44%;margin:-22% 0 0 -22%;opacity:1}100%{width:88%;height:88%;margin:-44% 0 0 -44%;opacity:0}}.loaderSL-css{background:0;position:relative;width:200px;height:200px}.loaderSL-css div{position:absolute;top:50%;left:50%;margin:0;width:0;height:0;opacity:0;border-radius:50%;border-width:24px;border-style:solid;-ms-animation:uil-ripple 2s ease-out infinite;-moz-animation:uil-ripple 2s ease-out infinite;-webkit-animation:uil-ripple 2s ease-out infinite;-o-animation:uil-ripple 2s ease-out infinite;animation:uil-ripple 2s ease-out infinite}.loaderSL-css div:nth-of-type(1){border-color:#f7af9f}.loaderSL-css div:nth-of-type(2){border-color:#53a6e3;-ms-animation-delay:1s;-moz-animation-delay:1s;-webkit-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}</style>";
            document.getElementsByTagName("head")[0].appendChild(style);
            //››› °··· append to head
        }, //°•······ ›preloader,overlay loaded ··¬

        pageCss: function() {
            //‹pageCss
            console.info(
                "%c css \u221a",
                "color:white;background:green;padding:3px 5px;border-radius:5px;line-height:24px;"
            );
            //‹⁄°°°°°°°°°°°°°°°°°°°°°°°°°
            var style = document.createElement("style");
            style.type = "text/css";
            //°·‹clearfix
            style.innerHTML += ".clearfix:after {visibility:hidden;display:block;font-size:0;content:'';clear:both;height:0;}";
            style.innerHTML += ".clearfix {display:inline-block;}";
            style.innerHTML += "* html .clearfix {height: 1%;}";
            style.innerHTML += ".clearfix {display:block;}";
            //°·››››endof-clearfix

            //›››mobile
            //•••••••••
            //°·‹982 - 992px not tablet •
            style.innerHTML += "@media screen and (min-device-width:768px) and (max-device-width:992px) { #Job_Search .col.col-3 {width:30%;} #Job_Search .action {position:absolute; top:43px; right: 220px !important;} .underline { width:80% !important;}}\n";

            //°·‹under @480px ··••••·· @980px
            style.innerHTML += "@media screen and (min-device-width:480px) and (max-device-width:980px) { #searchBox {display:none;}}\n";

            //°·‹mobile phones portrait @480px ··•••·· (landscape640) •
            style.innerHTML += "@media screen and (max-device-width:480px) and (orientation:portrait) { }\n";

            //°·‹append to head •
            document.getElementsByTagName("head")[0].appendChild(style);
        }, //°•······ ›endºƒPageÇss ···¬

        preloaderOff: function() {
            //‹preloaderØƒƒ ¬¬ °···removed at †he √ery end.
            console.info(
                "%c preloaderOff \u221a",
                "color:white;background:blue;padding:3px 5px;border-radius:5px;"
            );
            //‹⁄°°°°°°°°°°°°°°°°°°°°°°°°°
            function delay() {
                //°···removes loaderSl-css class •
                window.document.body.classList.remove("loaderSL-css");
                //°···removes overlay div • bottom pg
                var over = document.getElementById("overlay");
                over.parentElement.removeChild(over);
                //°··· remove js styles added to body • top pg
                var loader = document.getElementsByTagName("body")[0];
                loader.style.width = "";
                loader.style.height = "";
                loader.style.top = "";
                loader.style.left = "";
                loader.style.backgroundColor = "";
            } //°··· delay funct •··
            //°··· delays call to delay funct··∞∞··longer on pg •··
            setTimeout(delay, 1500); //°•@2500···@6500·—·ini†
        }, //°•······ ›preloaderOff ···¬

        searchBox: function() {
            //‹·· searchBøx
            console.info(
                "%c searchBox \u221a",
                "color:white;background:blue;padding:3px 5px;border-radius:5px;line-height:24px;"
            );
            //‹⁄°°°°°°°°°°°°°°°°°°°°°°°°°
        }, //°•······ ›searchBox ···¬

        mobileEle: function() {
            //‹console
            console.info(
                "%c mobileEle \u221a",
                "color:white;background:green;padding:3px 5px;border-radius:5px;line-height:24px;"
            );
            //‹⁄°°°°°°°°°°°°°°°°°°°°°°°°°
        }, //°•······ ›mobileEle ···¬

        resize: function() {
            //‹console
            console.info(
                "%c resize \u221a",
                "color:white;background:blue;padding:3px 5px;border-radius:5px;line-height:24px;"
            );
            //‹⁄°°°°°°°°°°°°°°°°°°°°°°°°°
        }, //°•······ ›resize ···¬

        endOf: function() {
            //‹console
            console.info(
                "%c °·en∂Øƒ•° \u221a",
                "color:red;background:black;padding:3px 5px;border-radius:5px;margin:5px 0;line-height:24px;"
            );
            //‹⁄°°°°°°°°°°°°°°°°°°°°°°°°°
        } //°•······ ›endºƒ •–––ı
    }; //°···SL.andRedEyelikeHAYS °•∞∞·©

    (function() {
        setTimeout(
            function() {
                SL.andRedEyelikeHAYS.init();
            },
            2500
        ); //°•@2500···allows loader to show for a couple secs @2500°—preloaderØƒƒ
    })();
}.call(window.andRedEyelikeHAYS || {}));
