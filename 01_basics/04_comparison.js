// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);      // true
// console.log("02" > 1);     // true

console.log(null > 0);     // false
console.log(null == 0);    // false
console.log(null >= 0);   // true

/*
NOTE:- The reason is that because the euality check " == " and comparsions " < > <= >= " works differently.
Comparison convert null to a number , treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false.
*/

// console.log(undefined == 0);    // false
// console.log(undefined > 0);     // false
// console.log(undefined < 0);     // false

// === ; It checks both value as well as datatype

// console.log("2" === 2);