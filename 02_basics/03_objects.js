// Singleton
// Object.create (contructor)  --> isi me lgta hai singleton
// Objects Literals

const mySym = Symbol("key1");

const JsUser = {
    name: "shirish",     // at backend, name keyword treated as string, age location all!
    "Full_Name": "Hitesh Chaudhary",
    mySym : "mykey1",              // Symbol is defined in objects but when we see its datatype, it os actually undefined
    [mySym] : "mykey1",               // correct way to add symbol in objects, its datatype now defined as "String"
    age: 18,
    location: "jaipur",
    email: "hitest@google.com",
    isloggedin: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);    // "email" --> because treated as string, so to access, syntax would be follow!

/*
 node:- console.log(JsUser["email"]); 
 This method would be preferred to access the element in objects because to if any element defined like this
("Full_Name"= "Hitesh Chaudhary",) , to access this (.operation) won't work! instead we have to use {JsUser["Full_Name"]}
*/ 

// console.log(JsUser["Full_Name"]);
// console.log(JsUser[mySym]);

// Overwrite the values in object
JsUser.email = "damanagarwal@gmail.com"
// console.log(JsUser["email"]);
// Want to lock chnages that nobody can overwrite again so, freeze would be used
JsUser.email = "shirishagarwal@gmail.com"
// Object.freeze(JsUser);           // After this, object cannot be overwrite
JsUser.email = "shirishagarwal1998@gmail.com"

// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting);             // [Function (anonymous)] --> not executing jst referecing the function
console.log(JsUser.greeting());           // Hello JS user
console.log(JsUser.greetingTwo());        // Hello JS user, shirish