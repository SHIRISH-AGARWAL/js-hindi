// Functions

function sayMyName() {
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")
}

// sayMyName();

function addTwoNumbers(number1, number2) {
     console.log(number1 + number2)
} 

// const ans = addTwoNumbers(4, 7);
// console.log("Result: ",ans);          // Result:  undefined --> it's because function is not returning value


function mulTwoNumbers(number1, number2) {
    return (number1 * number2);
} 

const result = mulTwoNumbers(8, 9);
// console.log("Result: ", result);          // Result:  72

function loginUserMessage(username) {
    if(!username){                      // can also be written as if(username == undefined)
        return "Please enter a username";
    }
    return `${username} jst logged in`;
}

const ans = loginUserMessage("hitesh");
// console.log(ans);

function calculateCartPrice(...num1) {    // "..." --> rest or spread operator, name depend on it's use
    return num1;
}

const result2 = calculateCartPrice(200, 400, 600, 2000);
// console.log(result2);          // [ 200, 400, 600, 2000 ]

// Object passing in function

const User = {
    username: "hitesh",
    price: 199
}

function handleObjects(anyObject) {
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`);
}

handleObjects(User);

// Another way to pass object as an argument:
handleObjects({
    username: "Sam",
    price: 399
})

const newArray = [200, 400, 500, 6005];

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(newArray));                // 400

// direct passing array as an argument:
// console.log(returnSecondValue([100, 500, 800, 9364]))   // 500
