## Object type
collection of name-value pairs

    var company = new Object();
    company.name = "Facebook";
    console.log(company);
    > Object {name: "Facebook"}
    
 try this now:
 
    company.ceo.firstName = "Mark";
    console.log(company);
    > Uncaught TypeError:
      Cannot set property 'firstName' of undefined
    
hero company.ceo hasn't been defined yet.

To fix it:

    company.ceo = new Object();
    company.ceo.firstName = "Mark";
    console.log(company);
    > Object {name: "Facebook", ceo: Object}
        ceo: Object
             firstName: "Mark"
        name: "Facebook"
        
Get using dotNotation too:

    console.log("company ceo is " + company.ceo.firstName);

or 

    console.log(company["name"]);
    > Facebook
    
A better way to create/declare an Object:

    var company = {};
    company.name = "Facebook";
    > Object {name: "Facebook"}
    
and

    var company = {
        name: "Facebook",
        ceo: {
            firstName: "mark",
            favColor: "blue",
            "company stock": 110
        }
    };
    
