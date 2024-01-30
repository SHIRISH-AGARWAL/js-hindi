const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " value")     // Out-Dated

// Modern way to concatenate the strings
console.log(`Hello my name is ${name.toUpperCase()} with ${repoCount} repository `);
// output - Hello my name is HITESH with 50 repository

let gameName = new String("hitesh-hc-com") 

console.log(gameName);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase())     // HITESHHC

// To access character of string, we use [.charAt()] method
console.log(gameName.charAt(7));      // c

// To find index of character of strings, we use [.indexOf()] method
console.log(gameName.indexOf('e'));   // 3

// Return Slice of string from included starting index to excluded end index.
const newString = gameName.substring(0,4);
console.log(newString);   

// More like substring only, but we can give negative values too.
// starting excluded, ending included.
const anotherString = gameName.slice(-7, -4);       //  start from index 7 from reverse to 2 
console.log(anotherString);


// trim() - remove white spaces from start and end
// two of its subtypes - trimStart() and trimEnd().
const str = "   hitesh Chaudhary   ";
console.log("String with spaces: ",str);
console.log("String without start and end spaces:", str.trim());

const url = "https://hitesh%20chaudhary@gmail.com"
console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));






 
