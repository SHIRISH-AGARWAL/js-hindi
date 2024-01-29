const accountID = 144553
let accountEmail = "damanagarwal18@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountID = 2   // variable with const keyword cannot be updated.

accountEmail = "hc@hc.com"
accountPassword = "2121222"
accountCity = "Bengaluru"

console.log(accountID);

/*
Prefer not to use var
because of issue in block scope and fuctional scope
*/


// ( helps to get access multiple variables at a time in a tabular form ).
console.table([accountEmail, accountID, accountPassword, accountCity, accountState]);  
