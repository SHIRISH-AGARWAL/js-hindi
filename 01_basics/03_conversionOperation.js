let score = null
// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log((typeof(valueInNumber)));
// console.log(valueInNumber);


// while converting these values into numbers, datatype chnged to number but not value
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN 

let isLoggedIn =   " hitesh "

let booleanLoggedIn = Boolean(isLoggedIn);
// console.log(booleanLoggedIn);

// 1 => true; 0 => false
// "" => false; " " => true
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof(stringNumber))