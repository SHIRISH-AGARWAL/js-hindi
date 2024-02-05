// for of loop

// for (const iterator of object) {
    
// }

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Maps => any entry cannot be repeated, maps are known for unique values and remain in order as set by the user!

const map = new Map();                
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
map.set(12, "India")
// console.log(map)                       
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/ 

for (const key of map){
  // console.log(key)
}

/*  print in the form of array
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
*/

// to print key and value seperately, we have a shortcut
for (const [key, value] of map) {
  console.log(key, ':-', value);
}
/*
IN :- India
USA :- United States of America
Fr :- France 
12 :- India
*/

const myObject = {
  game1: 'NFS',
  game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);         // myObject is not iterable => for of is not working with objects   
  
// }