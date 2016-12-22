/*
Gets the average number from an array of numbers
typeof to check whether is it a string or number, if string converts to a number with parseFloat.
Returns the average with two decimal places.
Sum is an integer
Average is a float
*/

function getAvg(arr) {

		var sum = 0;
		for (var i=0; i < arr.length; i++) {

                        
              if (typeof arr[i] == 'string') {
                
                  sum += parseFloat(arr[i]);  
                  console.log(arr[i] + ' is a ' + typeof arr[i]);
			  
              }  
                
              else {
                  sum += (arr[i]);
                  console.log(arr[i] + ' is a ' + typeof arr[i]);
              }
                  
        }//for

        //check the sum       
		console.log('the array sum is: ' + sum);
        //get average: sum divided by total nums       
		var avg = (sum/(arr.length)).toFixed(2); //get the avg with just 2 decimals
		console.log('the average is: ' + avg);
		return avg;
	
	}// getAvg 

	//testing function
    var test = [34.96,34.94,34.8,34.76,34.7,34.7,34.4];
    //var test = [1,2,3,4,'12',5];

	getAvg(test);
