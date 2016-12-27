//Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed 
//and return the string in reversed order. For example: if the input string is "Hello World and Coders" 
//then your program should return the string sredoC dna dlroW olleH. 

var name = 'stefano';

//one way is using array.reverse() method
//for that i will convert stefano into an array using split

var reverseName = [];

reverseName = name.split('');

reverseName.reverse():


// and i get:

["o", "n", "a", "f", "e", "t", "s"]



// this does the same thing

var name = 'stefano';

var reverse = name.split('').reverse();

reverse;

["o", "n", "a", "f", "e", "t", "s"]

//reverse.join('');

"onafets"

// or

var name = 'stefano';

var reverse = name.split('').reverse().join('');

reverse;


/*
 encapsulated as a function
 reversing a string with built-in methods
*/

var name = 'stefano';

function reverseName(name) {
    var reverse = name.split('').reverse().join('');
    return reverse;
}
reverseName(name);




====================================================================

// returns string 'stefano' backwards
var name = 'stefano';
var reverse= '';

function firstReverse(str) {
  for (var i=((name.length) - 1); i >= 0;  i--) {
  		reverse += name[i] + ', ';
  }

  console.log('reverse is: ' + typeof(reverse));
  return reverse;

}//firstReverse


firstReverse(name);


============================================================================
//returns the next letter on a string by converting to char val first and back to string
//if 'z' then does 'a'
//also replaces any lowercase vowels found to Uppercase

function nextLetter(str) {
  
  //gi in regex means dont return on first march all matches/insensitive
  var replacement = str.replace(/[a-z]/gi, function (char) {
    
    if (char == 'z') {
      
      char = 'a';
      return String.fromCharCode(char.charCodeAt() + 0);
    
    } else {
    
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  
  }); //replacement
  
  //capitalize vowels
  var capital = replacement.replace(/a|e|i|o|u/gi, function (cap) {
    
    return cap.toUpperCase();
  
  }); //capital
  
  return capital;

}//nextLetter

nextLetter('zaaa');

=> "Abbb"



==========================================================================================
//

//returns this:
//ie given a: 4 => 4*3*2*2 = 24, 
     given a: 5 => 5*4*3*2 = 120

function factorial(num) {
  
  //convert number to integer before doing anything
  numround = Math.round(num);
  //or will always get zero as an answer
  if (numround == 0) {
  
    return 1;
  
  } else {
    //runs function like a loop
    numround = numround * factorial(numround-1);
  
  }
  
 return numround;
  

}


factorial(5.1);
=> 120










