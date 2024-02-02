//  constructors

const tinderUser = new Object()          //sigleton object 
// console.log(tinderUser);       // {} --> empty object 
  
const tinder = {}                  // non-singleton object
// console.log(tinder)            // {} --> empty object 

tinder.id = "123abc";
tinder.name = "Hitesh";
tinder.isLoggedIn = true;

// console.log(tinder);            // { id: '123abc', name: 'Hitesh', isLoggedIn: true }

// Declaring object into the objects:-

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);          // hitesh

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 }
// console.log(obj3);           // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj_ans = Object.assign({}, obj1, obj2, obj4);
// console.log(obj_ans);           // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
 
const obj = {...obj1, ...obj2}        // spread out method
// console.log(obj);                 // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// data come from database like this,
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "s@gmail.com"
    },
    {
        id: 3,
        email: "w@gmail.com"
    },
]

users[1].email = "hh@gmail.com"
// console.log(users[1].email)    // user is array contains objects at index places

// console.log(tinder);

// console.log(Object.keys(tinder))        // [ 'id', 'name', 'isLoggedIn' ]  --> return type is array
// console.log(Object.values(tinder))      // [ '123abc', 'Hitesh', true ]  --> return type is array
// console.log(Object.entries(tinder))     // [ [ 'id', '123abc' ], [ 'name', 'Hitesh' ], [ 'isLoggedIn', true ] ]
// Array into Array --> first attribute is key and second attribute is its value!

// console.log(tinder.hasOwnProperty('isLoggedIn'));    // true

// Destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor    

// If we want to print many times the instructor name, then course.courseinstructor won't be feasible

const {courseInstructor} = course
const {courseInstructor : instructor} = course

// console.log(courseInstructor);         // hitesh
console.log(instructor);                  // hitesh

// data from API --> JSON

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
