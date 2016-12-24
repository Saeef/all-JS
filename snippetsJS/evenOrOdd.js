<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>Check whether Number is Even or Odd</title>
    <style>
        .container1 {
            width: 900px;
            margin:0 auto;
            min-height: 150px;
            padding:1em;
            border-bottom:1px solid #e6e6e6;

        }

        .container2 {
            width: 900px;
            margin: 0 auto;
            min-height: 60px;
            border-bottom: 1px solid #e6e6e6;
            vertical-align: middle;
            line-height: 60px;

        }

        input[type=number] {
            border: 1px solid #333;
            display: inline-block;
            font-size: 16px;
            line-height: 26px;
            text-align: center;
            padding: 9px 18px;
        }

        label {
            display: inline-block;
            font-size: 18px;
            line-height: 26px;
            text-align:center;
            margin:2em 0;
        }

        button {
            margin-left:15px;
            padding:10px 20px;
            font-size:15px;
            cursor:pointer;
        }

    </style>
</head>
<body>


    <div class="container1">
        <label for="number">Check Whether Number Is Even or Odd:<br /><br />
            <input type="number" name="number" id="number" placeholder="enter a number" />
            <button id="ringo">Clicka Number</button>
            <button onClick="location.reload();">Refresh Page</button>

        </label>
    </div>

    <div class="container2">
       <p>Your answer...</p>
    </div>




<script type="text/javascript">


    /*
    ------------------------------------------------------------
      need more practice - this function took me way too long
      use debugger more, get a cheatsheet.

      it lets you enter a number upon a click event(button) then
      grabs the input value, checks to make sure it is a number
      first and if it is, via the remainder, checks to see whether
      it is an odd or an even number.


    ------------------------------------------------------------
    */

    //self-execution function and protects from global variables
    (function() {

        var result = document.getElementsByTagName('p')[0];
        var button = document.getElementById('ringo');

        button.addEventListener('click', function(number) {
            number = document.getElementById('number').value;
            //check to see is a number
            //debugger;
            //entered number comesback with strings so use parseInt
            //second argument is what i get when no number entered
            if(typeof parseInt(number) != "number" || number == "") {

                return result.innerHTML = number + ' you must enter a number!';

            }//if

             //it is a number
            else {

                //test to see whether is even or odd
                var odEve;

                if (number % 2 == 0) {
                    //is an even number
                    odEve = "even";
                    return result.innerHTML = number + " is " + odEve;
                }
                //otherwise
                else {
                    //is an odd number
                    odEve ="odd";
                    return result.innerHTML = number + " is " + odEve;
                }




            }//else

        }); //click event listener









    })();


</script>
</body>
</html>
