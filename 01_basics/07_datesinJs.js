//  Dates

let myDate = new Date();      // type of date = object
// console.log(myDate);      // 2024-01-31T18:42:20.890Z
// though its not readable, so following conversio are as follows

// not giving actual current time
// console.log(myDate.toString());   // Wed Jan 31 2024 18:43:14 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());    // Wed Jan 31 2024
// console.log(myDate.toLocaleDateString());    // 1/31/2024
// console.log(myDate.toISOString());       // 2024-01-31T18:46:05.513Z
// console.log(myDate.toJSON());            // 2024-01-31T18:46:36.586Z
// console.log(myDate.toLocaleString());    // 1/31/2024, 6:47:12 PM

// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());     // Mon Jan 23 2023 --> In Js, month starts with 0th index

// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toLocaleString());      // 1/23/2023, 5:03:00 AM  

// let myCreatedDate = new Date("2023-01-23");        // In yyyy-mm-dd format, month start with 1st index
let myCreatedDate = new Date("01-23-2023");           // In mm-dd-yyyy format, month start with 1st index
// console.log(myCreatedDate.toLocaleString());           //1/23/2023, 12:00:00 AM

let myTimeStamp = Date.now();
// console.log(myTimeStamp);        // 1706728198250 (milliseconds)   from 1 jan 1970
// console.log(myCreatedDate.getTime());      // to compare times
console.log((Math.floor((Date.now())/1000)));







