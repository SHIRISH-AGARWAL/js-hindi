const score = 100;
// console.log(score);
// console.log(typeof(score));       // number

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);            // 3
const numToStr = balance.toString();
// console.log(numToStr);
// console.log(typeof(numToStr));              // string
// console.log(typeof(balance));               // object

// console.log(balance.toFixed(2));           // give precised or decimaled value (eg. 100.00)

const otherNumber = 23.8966; 
// console.log(otherNumber.toPrecision(3));       // 23.9

const otherNumber2 = 123.8966;
// console.log(otherNumber2.toPrecision(3));      // 124

const otherNumber3 = 1123.8966;
// console.log(otherNumber3.toPrecision(3));      // 1.12e+3   --> 3 precised value then after exponential!

const num1 = 100000000;
// console.log(num1.toLocaleString());           // 1,000,000 
// --> this method helps to read long numbers by adding commas! (bydefault it is US based standard)
// for indian standard based 
// console.log(num1.toLocaleString('en-IN'));    // 10,00,00,000     


// *********************** MATHS ****************************

// console.log(Math);    // Object Type
// console.log(Math.PI)    // 3.141592653589793
// console.log(Math.abs(-4));    // absolute means change only -ve value to +ve value.
// console.log(Math.round(4.5));   // 5
// console.log(Math.floor(4.1));   // 4
// console.log(Math.min(4, 3, 6, 8));   // 3
// console.log(Math.max(4, 3, 9, 65));  // 65

console.log(Math.random());      // generate random values between 0 and 1!
console.log((Math.random()*10) + 1);    // *10 for getting value more than 1 and to avoid to get 0 we add +1  (1-9)

const min = 10;
const max = 20;

console.log(Math.floor((Math.random()) * (max - min + 1)) + min);   // range from 10+
