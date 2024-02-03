//  scopes of variables    (global scope vs local/block scope)
// var c = 300;

// local scope
// if(true){
//     let a = 10;
//     const b = 20;
//     // var c = 30;
// }

// console.log(a);        // won't print
// console.log(b);        // wont' print
// console.log(c);           // 30 -->

let a = 200;
if(true){
    let a = 10;
    const b = 20;
}

// console.log(a);     // 200

function one(){
    const username = "hitesh";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);     // error
    
    two();
    
}

one();                      // hitesh

// console.log(addOne(5));      // 6
function addOne(num1) {
    return num1 + 1;
}

console.log(addOne(5));      // 6



// Another way to define function
// console.log(addTwo(7));        // ReferenceError => Cannot access 'addTwo()' before initialization
const addTwo = function(num2) {
    return num2 + 2;
}

console.log(addTwo(7));        // 9
 