(function(f, undefined) {
    

    /*
    
      note to self:
      
      accessing a prototype method from inside of an IIFE
    
    
    
    */
    


    var Person = function(first,last,age) {
        this.first = first;
        this.last = last;
        this.age = age;

    };

    Person.prototype.getFullName = function(){
        var isthis = this;
        var nested = function() {
            var fname = isthis.first + " " + isthis.last;
            console.log(fname);
        
        };//nested

        return nested();

    };//getFullName prototype



    var person = new Person('Angel', 'Di Maria', 29);

    console.dir(person);


    /*
    
      best way no need to set public fns
      var person = new f.Person('Angel','Di Maria',29);
      
      person.getFullName();
      
    */



    return f;







})(window.f = window.f || {});
