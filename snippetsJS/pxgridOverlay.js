
/* --------------------------------------------------------------------------------------------------------

  Image overlay. 
  - An on click event to an img on a page, adds a div element, an img elem with src to img file.
  - Self exec function, but u need to select a target img obviously - change code if you're not 
    using a .jpg
  - Adds/removes on-resize and scroll events and dynamically created el.
  
  ** They are probably way better libraries you could use for something like this on a bit larger
     project - plus you'll get transitions, animations etc
     
  ** But for something small, where u need to target the entire page, or just one image and gotta make sure is 
     works well all-across, on resize, scroll events then this can be helpful.
 
------------------------------------------------------------------------------------------------------------ */


var pixGrid = function() {
		
		function a(a) {
			var b = (window.innerWidth - a.width) / 2,
				c = (window.innerHeight - a.height) / 2;
			return a.style.top = c + "px", a.style.left = b + "px", a;
		
		}//function a
    
		var b = document.getElementById('pxbanner');

		b.addEventListener("click", function(b) {

			if ("IMG" === b.target.tagName) {
					
					var c = document.createElement("div");

					//div#overlay el & styles.
					c.id = "overlay", document.body.appendChild(c), 
					c.style.position = "absolute", 
					c.style.top = 0, 
					c.style.backgroundColor = "rgba(0,0,0,0.7)", 
					c.style.cursor = "pointer", 
					c.style.width = window.innerWidth + "px", 
					c.style.height = window.innerHeight + "px", 
					c.style.top = window.pageYOffset + "px", 
					c.style.left = window.pageXOffset + "px";

					//for img src
					var d = b.target.src,
						e = document.createElement("img");

					//new el started not appended anywhere yet.
					var txt = document.createElement("p");
						txt.innerHTML = "click here exit";
						txt.style.fontColor = "#ffffff";
						txt.style.fontSize = "24px";
						txt.style.textAlign = "center";	

					//img src & styles
					e.id = "largeImage", 
					e.src = d.substr(0, d.length - 7) + ".jpg", 
					e.style.display = "block", 
					e.style.position = "absolute";


					//gets window width,height
					e.addEventListener("load", function() {
						this.height > window.innerHeight && (this.ratio = window.innerHeight / this.height, 
						this.height = this.height * this.ratio, 
						this.width = this.width * this.ratio), 
						this.width > window.innerWidth && (this.ratio = window.innerWidth / this.width, 
						this.height = this.height * this.ratio, 
						this.width = this.width * this.ratio), 
						a(this), 
						c.appendChild(e)

					 }), 

					//image added dynamically - removes evts
					//c is overlay, e is lg img
					e.addEventListener("click", function() {
						c && (window.removeEventListener("resize", window, !1), 
						window.removeEventListener("scroll", window, !1), 
						c.parentNode.removeChild(c)
						)

					}, !1), 

					//scroll
					window.addEventListener("scroll", function() {

						c && (c.style.top = window.pageYOffset + "px", 
						c.style.left = window.pageXOffset + "px")

					}, !1), 
	
					//resize
					window.addEventListener("resize", function() {
						c && (c.style.width = window.innerWidth + "px", 
						c.style.height = window.innerHeight + "px", 
						c.style.top = window.pageYOffset + "px", 
						c.style.left = window.pageXOffset + "px", 
						a(e))
					}, !1)
			}//if

		}, !1);//function b

	}();//pixGrid
