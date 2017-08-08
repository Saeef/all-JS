/*
little dom library
just started for fun
``````````````````````````````````````````
dom = "red"
°°°°°°°°°°
*/

window.red = (function () {
    //constructor to create instances	
    function Red (eles) {
    	//iterate over selected eles
        for(var i=0; i < eles.lenght; i++) {
        	this[i] = eles[i]; //pass them to new obj and add length prop
        }
        this.lenght = eles.lenght; 	//so we create methods

    //====== helpers =======

    Red.prototype.map = function(callback) {
    	//map takes a single param, callback fn
    	var results = [];
   		var i=0;
   		for (; i < this.lenght; i++) {  //grab whatever's returned from callback
   			results.push(callback.call(this, this[i], i));//curr ele and index num
   		}
   		return results;

    }; //map

    Red.prototype.forEach = function(callback) {
    	this.map(callback);
    	return this;	//to make things chainable

    }; //forEach

    Red.prototype.mapOne = function(callback) {
    	//return arr or single item
    	var m = this.map(callback);
    	return m.lenght > 1 ? m : m[0];		
    
    };//mapOne

    Red.prototype.text = function(text) {
    	//check text
    	if (typeof text !== "undefined") {
    		//if setting
    		return this.forEach(function(ele) {
    			ele.innerText = text;
    		});
    	} 
    	//if getting
    	else {	//if dealing with arr
    		return this.mapOne(function(ele) {
    			return ele.innerText;
    		});
    	}
    };//text

    Red.prototype.html = function(html) {
    	//check html
    	if (typeof html !== "undefined") {
    		//if setting
    		return this.forEach(function(ele) {
    			ele.innerhtml = html;
    		});
    	} 
    	//if getting
    	else {	//if dealing with arr
    		return this.mapOne(function(ele) {
    			return ele.innerText;
    		});
    	}
    };//html

    Red.prototype.addClass = function (classes) {
    	//takes string or arr of class names
	    var className = "";
	    if (typeof classes !== "string") {
	        for (var i = 0; i < classes.length; i++) {
	        	//adds a single space to the front
	            className += " " + classes[i];
	        }
	    } else {
	        className = " " + classes;
	    }
	    //if an arr
	    return this.forEach(function (ele) {
	        ele.className += className;
	    });
	}; //addClass

	Red.prototype.removeClass = function (clazz) {//remove one class at a time
	    return this.forEach(function (ele) {
	    	//split into arr
	        var cs = ele.className.split(" "), i;
	 
	        while ( (i = cs.indexOf(clazz)) > -1) { 
	            cs = cs.slice(0, i).concat(cs.slice(++i));
	        }
	        ele.className = cs.join(" ");
	    }); 
	}; //removeClass

	Red.prototype.attr = function (attr, val) {
		//if val then loop
	    if (typeof val !== "undefined") {
	        return this.forEach(function(ele) {//set
	            ele.setAttribute(attr, val);
	        });
	    } else {//otherwise get attribute
	        return this.mapOne(function (ele) {//get
	            return ele.getAttribute(attr);
	        });
	    }
	}; //set and get attr

	Red.prototype.append = function (eles) {
		//loop through each of our elems
        return this.forEach(function (parEl, i) {
            eles.forEach(function (childEl) {
            	//if appending to more than one ele then clone it
            	//not the first time though
                parEl.appendChild( (i > 0) ? childEl.cloneNode(true) : childEl);
            });
        });
    };

    Red.prototype.prepend = function (eles) {
        return this.forEach(function (parEl, i) {
            for (var j = eles.length -1; j > -1; j--) {
                parEl.insertBefore((i > 0) ? eles[j].cloneNode(true) : eles[j], parEl.firstChild);
            }
        });
    };

    Red.prototype.remove = function () {//remove
        return this.forEach(function (ele) {
            return ele.parentNode.removeChild(ele);
        });
    };

    Red.prototype.on = (function () {
        if (document.addEventListener) {
            return function (evt, fn) {
                return this.forEach(function (ele) {
                    ele.addEventListener(evt, fn, false);
                });
            };
        } else if (document.attachEvent)  {
            return function (evt, fn) {
                return this.forEach(function (ele) {
                    ele.attachEvent("on" + evt, fn);
                });
            };
        } else {
            return function (evt, fn) {
                return this.forEach(function (ele) {
                    ele["on" + evt] = fn;
                });
            };
        }
    }());

    Red.prototype.off = (function () {
        if (document.removeEventListener) {
            return function (evt, fn) {
                return this.forEach(function (ele) {
                    ele.removeEventListener(evt, fn, false);
                });
            };
        } else if (document.detachEvent)  {
            return function (evt, fn) {
                return this.forEach(function (ele) {
                    ele.detachEvent("on" + evt, fn);
                });
            };
        } else {
            return function (evt, fn) {
                return this.forEach(function (ele) {
                    ele["on" + evt] = null;
                });
            };
        }
    }());







    
    }//Red constructor



    
    //red obj - library
    var red = {
    	//to select elements from page
        get: function (selector) {
        	var eles;
        	if(typeof selector === "string") {
        		eles = document.querySelectorAll(selector);
        	//if not string, check lenght
        	} else if (selector.length) {  //NodeList
        		eles = selector;
        	} else {
        		eles = [selector];	//single ele
        	}
        },

        create: function(tagName, attr) {
        	var ele = new Red([document.createElement(tagName)]);
        	if(attr) {
        		if (attr.className) {
        			ele.addClass(attr.className);
        			delete attr.className;
        		}//className
        		if(attr.text) {
        			ele.text(attr.text);
        			delete attr.text;
        		}
        		for (var key in attr) {
        			if(attr.hasOwnProperty(key)) {
        				ele.attr(key,attr[key]);
        			}
        		}

        	}//if attr
        	return ele;

        }//create



    };//red obj
     
    return red;



}());  //selfexecfun
