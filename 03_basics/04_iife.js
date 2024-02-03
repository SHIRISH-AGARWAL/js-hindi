// Immediately Invoked Function Expression (IIFE)

/*
Note:- what is iife and why we need this?
--> function jo immediately exceute h jaye.
--> global scope ke pollutions se problem hoti hai kayi baar toh global scope ke jo variables hai jo bhi declarations hai, uske polltuion ko hatane ke liye humne iife ka use kiya! 
*/ 

(function chai() {
    // named IIFE 
    console.log(`DB Connected`);
})();                             // semicolon is must here, cuz iife doesn't know where to be terminated!

( function chaiaurcode() {
    console.log(`DB Connected two`);
})();

( (name) => {
    console.log(`DB Connected, ${name}`);
})("Hitesh Sir")


 





 