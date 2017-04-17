(function(andRedEyelikeHAYS, undefined) {
    "use strict";
    debugger;
    var SL = {};
    SL.andRedEyelikeHAYS = {
        init: function() {
            this.preloader();
            this.pageCss();
            this.searchBox();
            this.secondRow();
            this.tabUpdate();
            this.sixOne();
            this.sixTwo();
            this.feature();
            this.rowpic();
            this.rowText();
            this.bottone();
            this.footerTop();
            this.footerBottom();
            this.housekeeping();
            this.preloaderOff();
            this.endOf();
        },

        preloader: function() {
            console.info(
                "%c css \u221a",
                "color:white;background:blue;padding:3px 5px;border-radius:5px;line-height:24px;"
            ); //‹console····•
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
            ); //‹console····•
            var style = document.createElement("style");
            style.type = "text/css";
            //.clearfix
            style.innerHTML += ".clearfix:after {visibility:hidden;display:block;font-size:0;content:'';clear:both;height:0;}";
            style.innerHTML += ".clearfix {display:inline-block;}";
            style.innerHTML += "* html .clearfix {height: 1%;}";
            style.innerHTML += ".clearfix {display:block;}";
            //.header
            style.innerHTML += ".row.sub-menu-opened.single-col {margin:0; }\n";
            //.acctFin
            style.innerHTML += "#acctFin { margin:20px 0px 0px 0px;}";
            //catRight
            style.innerHTML += "#catRight {padding:20px; background-color:#ffffff;}";
            //.catRight .box.expandable-in-mobile
            style.innerHTML += "#catRight .box.expandable-in-mobile {padding:0 !important; margin:10px 0px 0px 0px !important;}";
            //job-search
            style.innerHTML += ".job-search {background-color:#009ed9;};\n";
            //.form
            style.innerHTML += "#Job_Search li>label {min-height:30px !important; color:#eaeaea;}\n";
            style.innerHTML += "#Job_Search li>label {min-height:30px !important; color:#eaeaea;}\n";
            style.innerHTML += "#Job_Search {position: relative;}\n";
            style.innerHTML += "#Job_Search .col.col-3 {width:34%;}\n";
            style.innerHTML += "#Job_Search .action {position:absolute; top:43px; right:136px;}\n";
            style.innerHTML += "ul.form li.col.col-3.first {margin-left:90px;}\n";
            //.underline
            style.innerHTML += ".underline {border-bottom: none; width:90%; text-align:center; padding-top: 1em !important;  color:#eaeaea;}\n";
            //.tick box
            style.innerHTML += ".input-chk label {position:absolute; right:-9999px; opacity:0;}";
            //.popularLeft
            style.innerHTML += "#popularLeft {padding:20px; height:467px; background-color:#ffffff;}";
            //popularLeft li a.btn
            style.innerHTML += "#popularLeft li a.btn {margin-top:31px !important;}";
            //.tab panner
            style.innerHTML += ".tab-contents li ul h3 a {font-size:18px;}";
            style.innerHTML += "ul.tab-contents { max-height: 230px; overflow: hidden;}";
            //.conhays
            style.innerHTML += "#conhays {margin:20px 0 0 0; background-color:#ffffff;padding:0 9em;}";
            //h2.title
            style.innerHTML += "h2.title {text-align:center; padding-top:20px; margin-bottom:1em;}";
            //.cmz
            style.innerHTML += ".cmz {margin:0 !important; display:inline-block !important;padding:1em 1em 1em;}";
            //.bhay threesee
            style.innerHTML += ".bhay.threesee {margin: 1.5em 1em auto;}";
            //.bhay twosee
            style.innerHTML += ".bhay.twosee {margin: 1.5em 2.5em auto;}";
            //.bhay onesee
            style.innerHTML += ".bhay.onesee {margin: 1.5em 2.5em auto;}";
            //.cmz p
            style.innerHTML += ".cmz p {text-align:center; margin-top:.75em; margin-bottom:0; width:100%; padding:0 1.7em;}";
            style.innerHTML += "img.maimg {width:120px; height:125px; margin:0 3.9em auto;}";
            style.innerHTML += "img.liimg {width:22px; height:20px; margin:0; line-height:20px; vertical-align:bottom; margin-left:10px;}";
            style.innerHTML += "button.bhay {margin:1.5em 2.6em auto; height:auto;}";
            //borders lines
            style.innerHTML += "#nav-main li>ul, #menu .nav-sub { border-top:10px solid #f6f7f7; border-bottom: 10px solid #f6f7f7;}\n";
            style.innerHTML += ".sub-menu-opened { margin-bottom:0;}\n";
            //.arrow-list li
            style.innerHTML += "#popularLeft .arrow-list li {padding: 10px 0 10px 28px;}";
            //.col.col-12.featured1
            style.innerHTML += ".col.col-12.featured1 {margin:20px 0 0 0; padding:10px 10px 20px 10px; background-color:#ffffff;}";
            //.col.col-2.sfeat1
            style.innerHTML += ".col.col-2.sfeat1 {margin:26px 25px;}";
            //sfeat1 a.fimg
            style.innerHTML += ".sfeat1 a.fimg {}";
            //img.simg
            style.innerHTML += "img.simg {width:180px; height:144px; padding:2em 1em; border:1px solid #cccccc;}";
            //.col.col-12.rowpic
            style.innerHTML += ".col.col-12.rowpic {margin:20px 0 0 0; padding:0px 0px 0px 0px;}";
            //#rowpic .col.col-6.first
            style.innerHTML += "#rowpic .col.col-6.first {background-color:#ffffff; margin-right:20px; margin-left:0; padding:1em;}";
            //#rowpic .col.col-6.last
            style.innerHTML += "#rowpic .col.col-6.last {background-color:#ffffff; padding:1em; margin:0;}";
            //.sponsored-list li img
            style.innerHTML += ".sponsored-list li img {margin-top:15px !important;}";
            //a.senzabtn
            style.innerHTML += "a.senzabtn {color:#002776; font-weight:500;}";
            //.#txpic
            style.innerHTML += "div#txpic.col.col-12.txnopic {margin:20px 0 0 0; padding:10px 0px 0px 0px;}";
            //.#txpic .col.col-4.first
            style.innerHTML += "#txpic .col.col-4.first {background-color:#ffffff; margin-right:20px; margin-left:0; padding:1em;}";
            //#txpic .col.col-4.last
            style.innerHTML += "#txpic .col.col-4.last {background-color:#ffffff; margin-right:20px; margin-left:0; padding:1em;}";
            //col col-4 lultima
            style.innerHTML += "#txpic .col.col-4.lultima {background-color:#ffffff; margin:0; padding:1em;}";
            style.innerHTML += "ul.list.sponsored-list {margin:0 10px;}";
            //footer
            style.innerHTML += "#footert.col.col-12.ftop {background-color:#002776; color:#ffffff;font-weight:bold;margin:20px 0; padding:15px;}";
            style.innerHTML += "#footert a {color:#ffffff !important; line-height:28px;}";
            //.whiteLeft
            style.innerHTML += ".whiteLeft {color:#ffffff; text-align:left !important; padding-top:0 !important; border-bottom:1px solid #28649b; padding-bottom:.5em;}";
            //button a.bet
            style.innerHTML += "button a.bet {color:#ffffff}";
            //searchbe
            style.innerHTML += "#searchbe {margin-left:0;}";
            //footert ul
            style.innerHTML += ".col.col-4.fol ul {list-style:none; }";
            style.innerHTML += ".col.col-4.fom ul {list-style:none; }";
            style.innerHTML += ".col.col-4.for ul {list-style:none; }";
            //footer margins
            style.innerHTML += "div.col.col-4.fol {margin:0;}";
            style.innerHTML += "div.col.col-4.fom {margin:0;}";
            style.innerHTML += "div.col.col-4.for {margin:0;}";
            //footer bottom
            style.innerHTML += ".col.col-3.bel  {float:left;}";
            style.innerHTML += ".col.col-3.bem  {float:left;}";
            style.innerHTML += ".col.col-3.ber  {float:left;}";
            //footer bottom
            style.innerHTML += ".col.col-3.bel ul {list-style:none; padding-bottom: 1em;}";
            style.innerHTML += ".col.col-3.bem ul {list-style:none; padding-bottom: 1em;}";
            style.innerHTML += ".col.col-3.ber ul {list-style:none; padding-bottom: 1em;}";
            style.innerHTML += ".col.col-3.bel li {line-height:32px; color:#009ed9; vertical-align:middle;}";
            style.innerHTML += ".col.col-3.bem li {line-height:32px; color:#009ed9; vertical-align:middle;}";
            style.innerHTML += ".col.col-3.ber li {line-height:32px; color:#009ed9; vertical-align:middle;}";
            style.innerHTML += "ul li.lititle {color:#002776 !important;font-size:18px;font-weight:500; border-bottom:1px solid #e6e6e6; padding-bottom:.25em; margin-bottom:1em;padding-top:.5em;}";
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
            //var sb = document.querySelectorAll('.box')[4];
            var sb = document.querySelectorAll('.mainVar .single-col div.box')[1];
            var s = sb.cloneNode(true);
            s.style.padding = "0";
            s.id = 'searchBox';
            sb.style.display = 'none';
            var header = document.getElementsByTagName('header')[0];
            //header.appendChild(s);
            header.parentNode.insertBefore(s, header.nextSibling);
            //search title
            var search = document.querySelector('.job-search .underline');
            //new title
            search.textContent = 'Search for Accountancy jobs & Finance jobs here';
            //enter keywords
            var location = document.querySelector('.form .col.col-3.last label');
            location.textContent = 'Location';
            var jobTitle = document.querySelector('.col.col-3.first label');
            jobTitle.textContent = 'Job title';
        }, //°•······ ›searchBøx ¬¬ °

        secondRow: function() {
            console.info(
                "%c secondRow \u221a",
                "color:white;background:green;padding:3px 5px;border-radius:5px;line-height:24px;"
            ); //‹console····•
            var main = document.createElement('div');
            main.id = 'acctFin';
            main.className = 'col col-12 acctFin';
            main.innerHTML = "<div id='popularLeft' class='col col-6 popularLeft'></div><div id='catRight' class='col col-6 catRight'></div>";
            //appendScript
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.innerHTML = " function wysToggle(){if(window.jQuery&&jQuery.isReady){var expand=$(\"<a href='#' id='wysEvent' class='more'><span class='switch'>Read more</span><span class='access'> on '+$('#popularLeft h1').text()+'</span></a>\");var totalContents=document.getElementById('wysToggle').innerHTML;var totalHeight=$('#wysToggle').height();if(totalHeight<125){$('#wysEvent').hide();}else{var newLimit=0;var currentHeight=0;while(currentHeight<105){newLimit++;var newVisibleText=totalContents.substring(0,newLimit);$('#wysToggle').html(newVisibleText);currentHeight=$('#wysToggle').height();}while(!(/\s/.test(newVisibleText.charAt(newVisibleText.length-1)))){var counter=newVisibleText.length-1;newVisibleText=totalContents.substring(0,counter);}$('#wysToggle').html(newVisibleText);$('#wysToggle > :last-child').append(expand);}$('#wysEvent').toggle(function(e){$(this).detach().removeClass('more').addClass('less').children('.switch').text('Read less');$('#wysToggle').html(totalContents).find('> :last-child').append(this);e.preventDefault();},function(e){$(this).detach().removeClass('less').addClass('more').children('.switch').text('Read more');$('#wysToggle').html(newVisibleText).find('> :last-child').append(expand);e.preventDefault()});}else{window.setTimeout(wysToggle,100);}}wysToggle();";
            //handle for script
            var han = document.querySelectorAll('#page .row #pl_left_side')[0];
            //append after row
            han.parentNode.insertBefore(script, han);
            var handler = document.querySelectorAll('#page .row #pl_left_side')[0];
            handler.parentNode.insertBefore(main, handler);
            //12-6-6
            var ta = document.querySelectorAll('.hays-tabs')[0];
            taClone = ta.cloneNode(true);
            var handlerq = document.getElementById('popularLeft');
            handlerq.appendChild(taClone);
        }, //°•······ ›secondRow ¬¬ °

        tabUpdate: function() {
            console.info(
                "%c tabUpdate \u221a",
                "color:white;background:blue;padding:3px 5px;border-radius:5px;line-height:24px;"
            ); //‹console····•
            //remove third wheel
            if (document.querySelector('#popularLeft li.last')) {
                var feat = document.querySelector('#popularLeft li.last');
                feat.parentElement.removeChild(feat);
                var ftab = document.getElementById('featuredIdShow');
                ftab.parentElement.removeChild(ftab);
            }
            //tabheading
            var mo = document.querySelectorAll('.tab-scroll-mobile')[0];
            var motabs = mo.children[0];
            var firstli = motabs.firstElementChild;
            var lastli = motabs.lastElementChild;
            lastli.classList.add('last');
            //set default
            firstli.classList.add('active');
            //tab contents
            var tc = document.querySelectorAll('#popularLeft .tab-contents')[0];
            var tcon = tc.children;
            var tfi = tcon[0];
            tfi.style.maxHeight = '353px';
            tfi.style.overflow = 'hidden';
            var tla = tcon[1];
            //add last
            tla.classList.add('last');
            tla.style.maxHeight = '353px';
            tla.style.overflow = 'hidden';
            //set default
            tfi.style.display = 'list-item';
        }, //°•······ ›tabUpdate ¬¬ °

        sixOne: function() {
            console.info(
                "%c sixOne \u221a",
                "color:white;background:blue;padding:3px 5px;border-radius:5px;line-height:24px;"
            ); //‹console····•
            //var popular = document.getElementById('popularLeft');
            var latest = document.querySelector('#popularLeft li.first');
            var popular = document.querySelector('#popularLeft li.last');
            var ul = document.querySelectorAll('ul.tab-contents')[0];
            //event listener
            document.addEventListener('click', function(e) {
                if (e.target.innerHTML == 'Popular searches') {
                    latest.classList.remove('active');
                    e.target.parentElement.className = 'last active';
                    latest.classList.remove('active');
                    //latest
                    ul.children[0].style.display = 'none';
                    //popular
                    ul.children[1].style.display = 'list-item';

                } else if (e.target.innerHTML == 'Latest jobs') {
                    popular.classList.remove('active');
                    e.target.parentElement.className = "first active";
                    popular.classList.remove('active');
                    //latest
                    ul.children[0].style.display = 'list-item';
                    //popular
                    ul.children[1].style.display = 'none';
                }

            }, false);
        }, //°•······ ›sixOne ¬¬ °

        sixTwo: function() {
            console.info(
                "%c sixTwo \u221a",
                "color:white;background:blue;padding:3px 5px;border-radius:5px;line-height:24px;"
            ); //‹console····•
            var popRight = document.getElementById('catRight');
            //right cont
            var rhan = document.querySelector('#pl_left_side .box.expandable-in-mobile');
            var re = rhan.children[2];
            re.parentElement.removeChild(re);
            //clone
            var clon = rhan.cloneNode(true);
            //append
            popRight.appendChild(clon);

        }, //°•······ ›sixTwo ¬¬ °

        conHays: function() {
            console.info(
                "%c conHays \u221a",
                "color:white;background:blue;padding:3px 5px;border-radius:5px;line-height:24px;"
            ); //‹console····•
            //new section handle
            var fin = document.getElementById('acctFin');
            var pl = document.getElementById('pl_left_side');
            var row = fin.parentElement;
            var fin2 = fin.cloneNode();
            fin2.id = 'conhays';
            fin2.className = 'col col-12 conhays';
            var h2 = document.createElement('h2');
            h2.className = 'title';
            h2.textContent = "Connect with Hays";
            fin2.appendChild(h2);
            //insert bef
            row.insertBefore(fin2,pl);
            //3-3-3
            var d = document.createElement('div');
            d.className = 'col col-3 cmz';
            var a = document.createElement('a');
            a.href = '#';
            var bgimg = document.createElement('img');
            bgimg.className = 'maimg';
            bgimg.src = "images/cv.png";
            a.appendChild(bgimg);
            d.appendChild(a);
            var p = document.createElement('p');
            p.textContent = 'Send us your CV so that we can help you find a new role.';
            d.appendChild(p);
            //button
            var button = document.createElement('button');
            button.textContent = 'Send your CV';
            bimg =  document.createElement('img');
            bimg.src = "#";
            bimg.className = "liimg";
            button.appendChild(bimg);
            button.className = 'bhay';
            d.appendChild(button);
            //clone map
            var e = d.cloneNode(true);       
            e.src = "images/map.png";
            //clone zoom
            var f = d.cloneNode(true);         
            f.src = "images/zoom.png";
            //get conhays id
            var con = document.getElementById('conhays');
            con.appendChild(d);
            con.appendChild(e);
            con.appendChild(f);
            var pp = document.querySelectorAll('.col.col-3.cmz');
            var pp1 = pp[1].children[1];
            pp1.textContent= "With over 100 offices across the UK we are able to help yo in your job search.";
            //but mid
            var b = document.getElementsByClassName('bhay');
            b[1].innerHTML = "Office locator<img src='#' class='liimg'>";
            //but last
            b[2].innerHTML = "Browse by expertise<img src='#' class='liimg'>";
            var ppo = document.querySelectorAll('.col.col-3.cmz');
            var pp2 = ppo[2].children[1];
            pp2.textContent = "For more job vacancies across a wide range of industries click here.";
            //add sec class to btn
            var app = document.querySelectorAll('.col.col-3.cmz');
            var oneb = app[0].children[2];
            oneb.classList.add('onesee');
            var twob = app[1].children[2];
            twob.classList.add('twosee');
            var threeb = app[2].children[2];
            threeb.classList.add('threesee');
        }, //°•······ ›conHays ¬¬ °

        featured: function() {
            console.info(
                "%c featured \u221a",
                "color:white;background:blue;padding:3px 5px;border-radius:5px;line-height:24px;"
            ); //‹console····•
             var feat = document.createElement('div');
            feat.className = 'col col-12 featured1';
            //target handle is rot
            var row = document.querySelectorAll('.row');
            var rot = row[6].children[2];
            //apend
            rot.parentElement.insertBefore(feat,rot.nextSibling);
            feat.id = 'featured1';
            feat.innerHTML += "<h2 class='title'>View jobs from some of our featured employers</h2>";
            feat.innerHTML += "<div class='col col-2 sfeat1'><a class='fimg'a href='https:/www.hays.co.uk/jobs/ap-group/' target='_blank'><img class='simg f1' src='#'></a></div>";
            feat.innerHTML += "<div class='col col-2 sfeat1'><a class='fimg'a href='https:/www.hays.co.uk/jobs/lancaster-city-council/index.htm' target='_blank'><img class='simg f2' src='#'></a></div>";
            feat.innerHTML += "<div class='col col-2 sfeat1'><a class='fimg'a href='https:/www.hays.co.uk/jobs/paragon/index.htm' target='_blank'><img class='simg f3' src='#'></a></div>";
            feat.innerHTML += "<div class='col col-2 sfeat1'><a class='fimg'a href='https:/www.hays.co.uk/jobs/ucfb-wembley/index.htm' target='_blank'><img class='simg f4' src='#'></a></div>";
            feat.innerHTML += "<div class='col col-2 sfeat1'><a class='fimg'a href='https:/www.hays.co.uk/jobs/prestige-building-supplies/index.htm' target='_blank'><img class='simg f5' src='#'></a></div>";

        }, //°•······ ›featured ¬¬ °

         rowPic: function() {
            console.info(
                "%c rowPic \u221a",
                "color:white;background:blue;padding:3px 5px;border-radius:5px;line-height:24px;"
            ); //‹console····•

            var rowpic = document.createElement('div');
             rowpic.className = 'col col-12 rowpic';
             //target handle is rot
             var row = document.querySelectorAll('.row');
             var rot = row[6].children[3];
             //append
            rot.parentElement.insertBefore(rowpic,rot.nextSibling);
            rowpic.id = 'rowpic';
            rowpic.innerHTML += "<div class='col col-6 first'><h3>Gender Diversity survey</h3><ul class='list sponsored-list'><li class='first last'><h4></h4><div class='content-img'><img class='f-left' width='80' height='80' src='#'><p></p><p>Tell us your views and experiences around equal pay, career development opportunities, flexible working and gender discrimination in the workplace.</p><p></p><a class='senzabtn' href='#'>Take the survey</a></div></li></ul></div>";
            rowpic.innerHTML += "<div class='col col-6 last'><h3>Accountancy & Finance insights</h3><ul class='list sponsored-list'><li class='first last'><h4></h4><div class='content-img'><img class='f-left' width='80' height='80' src='#'><p></p><p>Read our Accountancy & Finance expert insights to help you make the right decisions for both your career and your<br/> business.</p><p></p><a class='senzabtn' href='/job/accountancy-finance-jobs/insights/index.htm'>View insights</a></div></li></ul></div>";
        }, //°•······ ›rowPic ¬¬ °

         rowText: function() {
            console.info(
                "%c rowText \u221a",
                "color:white;background:blue;padding:3px 5px;border-radius:5px;line-height:24px;"
            ); //‹console····•

            var txnopic = document.createElement('div');
            txnopic.className = 'col col-12 txnopic';
            //target handle is rot
            var row = document.querySelectorAll('.row');
            var rot = row[6].children[4];  
            //append
            rot.parentElement.insertBefore(txnopic,rot.nextSibling);
            txnopic.id = 'txpic'
            txnopic.innerHTML += "<div class='col col-4 first'><h3>Register to our events</h3><ul class='list sponsored-list'><li class='first last'><h4></h4><div class='content-img'><p></p><p>From workshops to sector specific markets updates, we are dedicated to creating opportunities for professionals and industry leaders to share their insights.</p><p></p><a class='senzabtn' href='/events/Calendar/index.htm'>View events</a></div></li></ul></div>";
            txnopic.innerHTML += "<div class='col col-4 last'><h3>Hays Accountancy & Finance on Facebook</h3><ul class='list sponsored-list'><li class='first last'><h4></h4><div class='content-img'><p></p><p>Follow Hays A&F on Facebook for useful career advice, popular jobs and the latest market updates</p><p></p><a class='senzabtn' href='https://www.facebook.com/HaysAccountancyFinanceUK?fref=ts&_ga=1.242399234.1013519477.1491394606'>Join today</a></div></li></ul></div>";
            txnopic.innerHTML += "<div class='col col-4 lultima'><h3>Hays Global Skills Index 2016</h3><ul class='list sponsored-list'><li class='first last'><h4></h4><div class='content-img'><p></p><p>The UK economic growth is under threat as the skills gap widens and productivity falters. Find out more about our findings on the current state of the UK labour market</p><p></p><a class='senzabtn' href='http://www.hays-index.com/?_ga=1.180384807.1013519477.1491394606'>View more</a></div></li></ul></div>";
        }, //°•······ ›rowText ¬¬ °

         bottone: function() {
            console.info(
                "%c bottone \u221a",
                "color:white;background:blue;padding:3px 5px;border-radius:5px;line-height:24px;"
            ); //‹console····•
             var txnopic = document.createElement('div');
            txnopic.className = 'col col-12 txnopic';
            //target handle is rot
            var row = document.querySelectorAll('.row');
            var rot = row[6].children[5];  
            //append
            rot.parentElement.insertBefore(txnopic,rot.nextSibling);
            txnopic.id = 'txpic'
            txnopic.innerHTML += "<div class='col col-4 first'><h3>Hays and the Chartered Institute of Credit Management</h3><ul class='list sponsored-list'><li class='first last'><h4></h4><div class='content-img'><p></p><p>Hays Credit Management has been appointed sole provider of a dedicated recruitment and career development service for the CICM. Allowing you free CICM membership for Hays' clients and candidates.</p><p></p><a class='senzabtn' href='/job/accountancy-finance-jobs/hays-and-the-cicm-527857'>Find out more</a><br><a class='senzabtn' href='/job/accountancy-finance-jobs/insights/industry-insight/sector-insights/cicm-membership/index.htm'>Free membership</a></div></li></ul></div>";
            txnopic.innerHTML += "<div style='margin-top:-25px;' class='col col-4 last'><h3>DNA of success</h3><ul class='list sponsored-list'><li class='first last'><h4></h4><div class='content-img'><p></p><p>Our DNA series interviews over 400 directors, partners and managers across the UK to find out their career journey as well as the challenges that they faced and the skills that they believe are important.<br><br>To get more insight follow the links to one of our many DNAs:</p><p></p><a class='senzabtn' href='https://hays.co.uk//dna-of-a-partner/index.htm?_ga=1.68843025.1013519477.1491394606'>DNA of a Partner</a><br><a class='senzabtn' href='http://hays.co.uk/job/accountancy-finance-jobs/dna-of-a-finance-director/index.htm'>DNA of a Finance Director</a><br><a class='senzabtn' href='https://www.hays.co.uk/dna-credit-manager/index.htm'>DNA of a Credit Manager</a></div></li></ul></div>";
            txnopic.innerHTML += "<div class='col col-4 lultima'><h3>Hays salary checker</h3><ul class='list sponsored-list'><li class='first last'><h4></h4><div class='content-img'><p></p><p>Are you being paid in line with other professionals? Whether you are looking for a new job or a pay rise it helps to understand what the typical salaries are and what your potential earnings could be.</p><p></p><a class='senzabtn' href='/salary-guide/salary-checker/index.htm'>Join today</a></div></li></ul></div>";
        }, //°•······ ›bottone ¬¬ °

         footerTop: function() {
            console.info(
                "%c footerTop \u221a",
                "color:white;background:blue;padding:3px 5px;border-radius:5px;line-height:24px;"
            ); //‹console····•
            var footert = document.createElement('div');
            footert.className = 'col col-12 ftop';
            //target handle is rot
            var row = document.querySelectorAll('.row');
            var rot = row[6].children[6];  
            //append
            rot.parentElement.insertBefore(footert,rot.nextSibling);
            footert.id = 'footert'
            footert.innerHTML += "<h2 class='title whiteLeft'>Explore Accountancy and Finance categories</h2>";
            footert.innerHTML += "<div class='col col-4 fol'><ul><li><a href='/job/accountancy-finance-jobs/senior-finance-qualified/index.htm'>Senior Finance - Qualified</a></li><li><a href='/job/accountancy-finance-jobs/payroll/index.htm'>Payroll</a></li><li><a href='/job/accountancy-finance-jobs/tax-treasury/index.htm'>Tax & Treasury</a></li></ul></div>";
            footert.innerHTML += "<div class='col col-4 fom'><ul><li><a href='/job/accountancy-finance-jobs/audit-risk-compliance/index.htm'>Audit, Risk & Compliance</a></li><li><a href='/job/accountancy-finance-jobs/public-practice-accounting/index.htm'>Public Practice Accounting</a></li><li><a href='/job/accountancy-finance-jobs/public-practice-accounting/index.htm'>Public Practice Accounting</a></li></ul></div>";
            footert.innerHTML += "<div class='col col-4 for'><ul><li><a href='/job/accountancy-finance-jobs/credit-control/index.htm'>Credit Control</a></li><li><a href='/job/accountancy-finance-jobs/public-services-accounting/index.htm'>Public Services Accounting</a></li><li><a href='/job/accountancy-finance-jobs/support-ledgers-bookkeeping/index.htm'>Support, Ledgers & Bookeeping</a></li></ul></div>";
        }, //°•······ ›footerTop ¬¬ °

        footerBottom: function() {
            console.info(
                "%c footerBottom \u221a",
                "color:white;background:blue;padding:3px 5px;border-radius:5px;line-height:24px;"
            ); //‹console····•
            var footerb = document.createElement('div');
            footerb.className = 'col col-12 fbot clearfix';
            //target handle is rot
            var row = document.querySelectorAll('.row');
            var rot = row[6].children[7];  
            //append
            rot.parentElement.insertBefore(footerb,rot.nextSibling);
            footerb.id = 'footerb';
            footerb.innerHTML += "<div class='col col-3 bel'><ul><li class='lititle'>Jobs in your area</li><li><a href='#'>Jobs in Birmingham</a></li><li><a href='#'>Jobs in London</a></li><li><a href='#'>Jobs in Leeds</a></li><li><a href='#'>Jobs in Leeds</a></li><li><a href='#'>Jobs in Manchester</a></li><li><a href='#'>Jobs in Nottingham</a></li><li><a href='#'>Jobs in Oxford</a></li><li><a href='#'>Jobs in Sheffield</a></li><li><a href='#'>Jobs in Northern Ireland</a></li></ul></div>";
            footerb.innerHTML += "<div class='col col-3 bem'><ul><li class='lititle'>Popular searches</li><li><a href='#'>Accountancy Jobs in London</a></li><li><a href='#'>Insurance Jobs in London</a></li><li><a href='#'>UK salary guide</a></li><li><a href='#'>Banking Jobs in London</a></li><li>HR Jobs</a></li><li><a href='#'>IT Jobs</a></li><li><a href='#'>Financial Analyst Jobs in London</a></li></ul></div>";
            footerb.innerHTML += "<div class='col col-3 ber'><ul><li class='lititle'style='height:46.5px;'><span style='display:none;'>no-title</span></li><li><a href='#'>Paralegal Jobs</a></li><li><a href='#'>PA Jobs</a></li><li><a href='#'>Life Sciences Jobs</a></li><li><a href='#'>IT Project Manager Jobs</a></li><li><a href='#'>Admin jobs in London</a></li><li><a href='#'>Tax & Treasury Jobs</a></li><li><a href='#'>Teaching Jobs</a></li></ul></div>";

           footerb.innerHTML += "<div class='col col-3 bem'><ul><li class='lititle'>Employer services</li><li><a href='#'>Assessment & Development</a></li><li><a href='#'>Career Transition</a></li><li><a href='#'>Digital Recruiting</a></li><li><a href='#'>Executive Search</a></li><li>Public Sector Recruiting</a></li><li><a href='#'>Recruiting Now</a></li><li><a href='#'>Talent Solutions</a></li></ul></div>";
        }, //°•······ ›footerBottom ¬¬ °

        housekeeping: function() {
            console.info(
                "%c housekeeping \u221a",
                "color:white;background:blue;padding:3px 5px;border-radius:5px;line-height:24px;"
            ); //‹console····•

            var rem1 = document.querySelector('#pl_left_side');
            var rem2 = document.querySelectorAll('.col.col-6.mainVar')[0];
            //remove
            rem1.parentElement.removeChild(rem1);
            rem2.parentElement.removeChild(rem2);
            var rem3 = document.querySelectorAll('.col.col-3.last')[2];
            setTimeout(function() {
                if(rem3) {
                    rem3.parentElement.removeChild(rem3);
                }

            },300);

            
            var rowe = document.querySelectorAll('.row')[6];   //row
            var fb = document.getElementById('footerb');
            //clone
            var clo = fb.cloneNode(true);
            //remove other one
            var rmv = fb.parentElement.removeChild(fb);
            // //footer handle
            var fo = document.getElementById('footer-bottom');
            var foot = document.getElementsByClassName('full-width-container');
            var footer = foot[1];
            footer.insertBefore(clo,fo);

            //button for panel
            var buttone = document.createElement('button');
            buttone.textContent = "Search all x jobs";
            buttone.id = 'searchbe';
            buttone.className = "bhay onesee search";
            //handle
            var popu = document.getElementById('popularLeft');
            popu.appendChild(buttone);

            //bone
            var one = document.querySelectorAll('.bhay.onesee')[1];
            one.innerHTML = "<a class='bet' href='#'>Send your CV<img src='#' class='liimg'></a>";
            var two = document.querySelectorAll('.bhay.twosee')[0];
            two.innerHTML = "<a class='bet' href='#'>Office locator<img src='#' class='liimg'></a>";
            var tre = document.querySelectorAll('.bhay.threesee')[0];
            tre.innerHTML = "<a class='bet' href='#'>Browse by expertise<img src='#' class='liimg'></a>";
        
            //num of jobs
            var jobs = document.getElementById('searchbe');
            jobs.innerHTML = "<script>\r\nvar value1  = \"\";\r\nfunction parseXml(xml) {\r\nvalue1 = $(xml).find(\"M\").text();\r\nif(value1){\r\ndocument.getElementById(\'googleJobs\').innerHTML = document.getElementById(\'googleJobs\').innerHTML.replace(\"*\",value1);\r\n$(\"#googleJobs\").show();\r\n}\r\n} \r\nfunction getData(){\r\nif (window.jQuery && jQuery.ui && jQuery.isReady) {\r\n$.ajax({\r\ntype: \"GET\",\r\nasync: false,\r\nurl: \"\/search?q=&locationToSearch=&partialfields=(xSpecialism:AccFin|xSubSpecialism:AccFin)&contentType=Jobs&level=&location_id=&ne_longitude=&ne_latitude=&site=IRE_SANGAM_JOBS_COLL&proxyreload=0&filter=0&btnG=Search&client=sangam_frontend_en&getfields=*&entsp=hays_policy&oe=UTF-8&exclude_apps=1&ud=1&siteLocale=en-GB&domainId=1&requiredfields=xlocale:en-GB&sort=date:D:L:d1&call=viewJobsCountBtn\",\r\ndataType: \"xml\",\r\nsuccess: parseXml\r\n});\r\n}\r\nelse\r\n window.setTimeout(getData,50);\r\n }\r\n getData(); \r\n</script><a class='btn' id='googleJobs' style='' href='https://m.hays.co.uk/search/?q=hays&amp;s=%2BxReleaseDate&amp;specialismId=AccFin&amp;subSpecialismId='>View all 4100 jobs</a>";
        }, //°•······ ›housekeeping ¬¬ °

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

        endOf: function() {
            console.info(
                "%c °·en∂Øƒ•° \u221a",
                "color:red;background:black;padding:3px 5px;border-radius:5px;margin:5px 0;line-height:24px;"
            ); //‹console····•
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
