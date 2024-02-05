// for each loop
// .forEach(callbackfn: (value: string, index: number, array: string[])

const coding = ["Js", "ruby", "Java", "Python", "C++"]

// coding.forEach( function (item) {             // callback function me function name nhi hota, 'function' keyword hota hai!
//     console.log(item)
// } )

// coding.forEach( (item, index, arr) => {
//     console.log(item,"at index ", index, "from array ",arr );
// } )

// Function as a parameter
// function printMe(item) {
//     console.log(item)
// }

// coding.forEach(printMe)

const myCoding =[ 
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    }
]

myCoding.forEach( function (item) {
    console.log(`${item.languageName} :- ${item.languageFileName}`)
})

