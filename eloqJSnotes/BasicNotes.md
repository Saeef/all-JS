EXPRESSION AND STATEMENTS    MAY DELETE THIS 
=========================

  +   A FRACTION OF CODE THAT PRODUCES A VALUE IS CALLED AN EXPRESSION
        EX.
          22 OR 'hello'   => ARE EXPRESSIONS
          
  +   STATEMENT STANDS ON ITW OWN AMOUNT TO SOMETHING
        EX.
          var caught = 5 * 5;
          
 +    A FUNCTION IS A PIECE OF PROGRAM WRAPPED IN A VALUE
      EX.
        +   alert('Good morning);
        +   prompt('What is your name');
        +   confirm('is that ok?');
        
        +   EXECUTIONG A FUNCTION IS CALLED INVOKING, CALLING, OR APPLYING
        +   VALUES GIVEN TO FUNCTIONS ARE CALLED ARGUMENTS.
        
        
        *Math.max
        console.log(Math.max(2,5));
        //  => 5
        
        
        EX.
          var number = Number(prompt('Enter a number'));
          if (!isNaN(number))
            alert('Your number is the square root of ' + number*number);
          else
            alert('whats wrong with u?');
  
  
WHILE AND DO LOOPS
==================
  
       EX
           var number = 0;
           while (number <=12) {
              console.log(number);
           }
           
           
      EX.
            var result = 1;
            var counter = 0;
            while(counter < 10) {
              result = result *2;
              counter = counter + 1;
            }
            console.log(result);
            // -> 1024
        
        
FOR LOOPS
========= 
  
        EX.
            for ( var number = 0;  number <= 12;  number ++) {
              console.log(number);
            }
        
        
        
SINGLE LINE COMMENTS           
====================
        EX.   // comment here
  
MULTIPLE LINE COMMENTS          
======================
        EX.   /*
             This is also a comment
             more goes here
             */  
        
        
        
        
EXERCISES  (WARM UP CHAPTERS)
=========
  
###  TRIANGLE MADE OF POUND SIGNS USING LOOP  (IT WORKS WHATEVER)       
    
        var triangle ="#";
        var count = 0;
        
        while (count < 7) {
            triangle = triangle + '#';
            var see =  triangle.charAt(0);
        
            if ( (triangle.charAt(0) == "#") && (count > 0) ) {
                 //not doing anything right now
        
            } elsvar triangle ="#";
        var count = 0;
        
        while (count < 7) {
            triangle = triangle + '#';
            var see =  triangle.charAt(0);
        
            if ( (triangle.charAt(0) == "#") && (count > 0) ) {
                 //not doing anything right now
        
            } else if (triangle == "##" && count == 0) {
                //removes first character
                triangle = triangle.substr(0,1);
        
            }
            console.log(triangle);
            count ++;
        }e if (triangle == "##" && count == 0) {
                //removes first character
                triangle = triangle.substr(0,1);
        
            }
            console.log(triangle);
            count ++;
        }
        
###  FIZZBUZZ EXERCISE (TOO EASY)
 
            for (var num = 1; num <= 100; num++) {
                if ((num % 3 == 0) && (num % 5 == 0)) {
                    console.log("FizzBuzz");
                } else if (num % 5 == 0) {
                    console.log("Buzz");
                } else if (num % 3 == 0) {
                    console.log("Fizz");
                } else
            
                console.log(num);
            }
        
###  CHESSBOARD EXERCISE       
####I PROVIDE SIZE AND IT GIVES ME AN EQUAL NUMBER OF ROWS AND COLUMNS USING #X's/ X#'s
      (NO FUNCTIONS YET - GOING BY THE BOOK - IT WORKS) 
    
              var total ="";  //it gives me undefined otherwise
              var size = Number(prompt("Enter the size of your board"));  //prompt throws an error on IDE's
              var count = 0;
              var tbottom = "";  //it gives me undefined otherwise
              
              for (var square=0; square < size/2; square ++) {
                  var right = ("X#");
                  var bottom = ("#X");
                  //gets me top row
                  total = total + right;
                  //get second row
                  tbottom = tbottom + bottom;
              }
              
              for( var i = 0; i < size/2; i++) {
                  //populates board with my two rows from above
                  console.log(total);
                  console.log(tbottom);
              
              }

            
       
        
        
  FUNCTIONS
=========
   + A TOOL TO STRUCTURE LARGER PROGRAMS, TO REDUCE REPITION, TO ISOLATE SUBPROGRAMS

   + DEFINING A FUNCTION
     EX
     ```
                  var square = function(x){
                     return x*x;
                  }
                  // square(2);
        
                  SLIGHTLY SHORTER WAY TO SAY "VAR SQUARE =  ... FUNCTION" IS
                  EX.
                    function square(x){
                      return x*x;
                    }
      ```
      
       -  FUNCTION DECLARATIONS LIKE THIS ONE ABOVE ARE NOT PART OF THE REGULAR TOP-TO-BOTTOM FLOW OF CONTROL - THEY
          MOVE TO THE TOP AND CAN BE USED BY ALL OF THE CODE IN THAT SCOPE.
          
       -   THE PLACE WHERE THE COMPUTER STORES VALUES ETC WHILE EXECUTION IS CALLED STACK - EVERY TIME A FUNCTION      
           IS CALLED THE CURRENT CONTEXT IS PUT ON TOP OF THE STACK.
        
       <br/> 
        
        
   + RETURN KEYWORD WITHOUT AN EXPRESSION AFTER IT, WILL CAUSE FUNCTION TO RETURN UNDEFINED
    
   + VARIABLES CREATED INSIDE A FUNCTION ARE LOCAL TO THE FUNCTION
    
   + VARIABLES DECLARED OUTSIDE OF ANY FUNCTION ARE CALLED GLOBAL
    
   + FUNCTIONS CAN BE CREATED INSIDE OTHER FUNCTIONS
    
   + UNLIKE OTHER LANGUAGES NOT ANY BLOCK OF CODE BTWEEN BRACES PRODUCES A NEW LOCAL ENVIRONMENT
    
   + IN JS FUNCTIONS ARE THE ONLY THING THAT CAN CREATE A NEW SCOPE
    
   + JS IS BROAD-MINDED ABOUT THE NUMBER OF ARGUMENTS - IF YOU PASS TOO MANY, THE EXTRA ONES ARE IGNORED, 
      IF TOO FEW, THE MISSING PARAMETERS GET ASSIGNED THE VALUE OF UNDEFINED.
      
      
      
CLOSURE
=======

  IT'S GOT TO DO WITH BEING ABLE TO REFERENCE A SPECIFIC INSTANCE OF A LOCAL VARIABLE INSIDE OF A FUNCTION.
    
    EX.
    
        function multiplier(factor) {
          return function(number) {
            return factor * number;
          }
        }
        
        var one = multiplier(2);
        console.log(one(5));
    
    
RECURSION
=========
  A FUNCTION THAT CALLS ITSELF IS CALLED RECURSIVE
    
    
#### EXERCISES
 
   EX.         
         //write a function that takes 2 arguments and returns their minimum          
         // stil too easy        
         
                    function min(x,y) {
                        if (x < y) {
                            return x;
                        } else {
                            return y;
                        }
                    }
                    
                    console.log(min(44,12));

    
    
   EX- BEAN COUNTING LAST ONE - STILL PRETTY EASY        
    
      //write a function countBs that takes a string as its only argument and returns a number        
      //that indicates how many uppercase "B" characters are in the string       
                
            function countBs(string, countwhat) {
                
               var findIt = String(countwhat);
               var letters = 0;
               for (var i=0; i < string.length; i++) {
                   if (string.charAt(i) == findIt) {
                       letters += 1;
                   }

               }
               console.log("There are " + letters + " " + findIt + "(s) on: \n\n" + "'" + string + "'");
                
            }
                
            countBs("Boy what a day Bye", "B");
                    
    
          
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
