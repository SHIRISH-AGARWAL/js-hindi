// truthy flasy means --> we assumed that this value might be true or false

// const userEmail = "hitesh@gmail.com"

// if(userEmail) {                      // Assumed to be true!
//     console.log("Got user email!");
// } else {
//     console.log("Don't have user email!");
// }

// falsy values: 

// false, 0, -0, BigInt 0n,  "", null, undefined, NaN

// truthy values:

// "0", 'false', "false", " ", [], {}, function(){} (empty function)

// const arr = []

// if(arr.length === 0) {
//     console.log("array is empty")
// }

// const myObj = {};

// if(Object.keys(myObj).length === 0){
//     console.log("Object is empty")
// }

// Nullish Coalescing Operator (??) : null , undefined

let val1;
// val1 = 5 ?? 10;              // 5
// val1 = null ?? 10;           // 10
// val1 = undefined ?? 10;      // 10  
// val1 = null ?? undefined;    // undefined
// val1 = undefined ?? null;    // null

console.log(val1);

// Terniary Operator

// condition ? expression1 : expression2

const isTeaPrice = 100;

(isTeaPrice <= 80) ? console.log("less than 80") : console.log("greater than 80");