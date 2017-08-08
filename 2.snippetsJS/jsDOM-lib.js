/*
javasript dom library - different approach - a bit more customized/direct

How to: **Current tasks**
=========================
- to find out available elements => redDom.message.avail();     
- to add an element => redDom.add('element');

      Ex.:
      
          // for help: how to use commands
          // =============================
            //to get all available commands on screen
            redDom.help.all;
           
          // create new 'div'
          // ===============
            redDom.add('div');
            returns => <div>this is a newly created element</div>
          
          // create new 'div' and 'id'
          // ========================
            redDom.add('div', 'newId');
            returns => <div id='newId'>this is a newly created element</div>
          
          // create new 'div', 'id' and 'class'
          // =================================
            redDom.add('div','newId','coolClass');
            returns => <div id='newId' class='coolClass'>this is a newly created element</div>
          
          // create new 'div' and 'class'
          // ===========================
            redDom.add('div','','coolClass');
            returns => <div class='coolClass'>this is a newly created element</div>   
            
          // create new 'a', 'class', and 'href'
          // ==================================
            redDom.add('div','','coolClass','http://ukrightmove.co.uk');
            returns => <a class='coolClass' href='http://ukrightmove.co.uk'>this is a newly created element</a>
            
          // create new 'a' and 'class' | href defaults to =>'href="#"'
          // =========================================================
            redDom.add('div','','coolClass');
            returns => <a class='coolClass' href='#'>this is a newly created element</a>  
    

*/


// redDom Library

window.redDom = function() {
  
  //this const function to handle live and instances
  function RedDom(hc,head,body) {
    //htmlCollection
    this.hc = document.children[0];
    //hc.children;
    this.head = hc.children[0];
    this.body = hc.children[1];
    
    //select all divs in body
    this.body.div = document.querySelectorAll('div');
    
    //select all a tags in body
    this.body.a = document.querySelectorAll('a');
    
    //target a[5]  testing how to collect live elements
    this.body.a[5].classList.add('xxx');
    
    //calling events approach
    RedDom.prototype.eventType = function(eventType,element,callback) {
      element.addEventListener(eventType,function(e) {
          //doSomething
          
      //callback for asynchronous event | output fn
      callback(element);
      });
    };//eventType
    
    //callback for asynchronous events
    RedDom.prototype.output = function(element) {
      //element do something
      
    };//output callback fn
    
    
    
    
    
    
    
    
    
    
    
  }//RedDom
  
  
  
  var redDom = {
  
      todo: ['div','ul','a'],
      
      add: function(ele,id,classi,href) {
        id = id || undefined;
        classi = classi || undefined;
        href = href || undefined;
        
        if (this.todo.includes(ele)) {
          ele = document.createElement(ele);
          if(id) {
            ele.id = id;
          }
          if(classi) {
            ele.className = classi;
          }
          if(href) {
              ele.href = href;
          }//if href set
          else {
              ele.href = '#';
          }//else href set to #
      
          ele.innerHTML = 'this is a newly created element';
          return ele;
        
        }//if
        else  {
          console.log(this.message.notAvail(ele));
          console.log(this.message.avail());
        }//else
        
        
      },//add
      
      message: {
        notAvail: function(item) {
          console.log(item + '%c is currently not available', 'color:red;');
        },
        avail:function() {
          var list = [];
          var counter = 0;
          redDom.todo.forEach(function(item) {
              counter++;
              list += ('\t' + counter + '. ' + item + '\n');
          });
         return console.log('%c Currently available are: \n ' + list, 'color:green; ');
          
        } //avail
        
        
      },//message
      
      help: {
          
          createDiv: "redDom.add('div');",
          createDivId: "redDom.add('div', 'newId');",
          createDivIdClass: "edDom.add('div','newId','coolClass');",
          createDivClass: "redDom.add('div','','coolClass');",
          all: "add div => redDom.add('div'); \n add div,id => redDom.add('div','newId');\n add div,id,class => redDom.add('div','newId','newClass');\n add div,class => redDom.add('div','','newClass');\n add a,class,href =>  redDom.add('div','','coolClass','http://ukrightmove.co.uk');\n add a,class(href defaults to #) => redDom.add('div','','coolClass'); "
          
      }//help
  
  
  
  

  
};//redDom


return redDom;



    
  
  
}();//redDom
