const user = {
    username: "hitesh",
    price: 900,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to the website`)
        // console.log(this);
    }
}

/*
note:- "this" keyword is used to refer the current context!
*/
user.welcomeMessage();
user.username = "sam";
user.welcomeMessage()
// console.log(this);

// function chai() {
//     let username = "hitesh";
//     console.log(this.username);
// }

// chai();                    // undefined => this can only be used in object not in function!

// const chai = function() {
//     let username = "hitesh";
//     console.log(this.username);
// }
    
//  chai();                   // undefined
 
// Arrow Function
const chai = () => {
    let username = "hitesh";
    // console.log(this.username);
}
    
chai(); 

// note:- Arrow Function me bhi hum "this" keyword ka use nhi kr skte!

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(7, 8));       // 15

// Implicit Return :

// const mulTwo = (num1, num2) =>  num1 * num2;
 
// console.log(mulTwo(7, 8));        // 56

// note:- Why we need implicit return function, because when need to return object this technique would be beneficial!

const returnObject = (num1, num2) =>  {username: "hitesh"};
console.log(returnObject(7, 8));         // undefined

// we need to wrap up in paranthesis " () "

const returnObject2 = (num1, num2) =>  ({username: "hitesh"});
console.log(returnObject2(7, 8));          // { username: 'hitesh' }