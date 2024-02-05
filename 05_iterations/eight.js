// reduce()

// (method) Array<number>.reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number, initialValue: number):
// initial value copied to accumulator at first step, then accumulator updated at each step after operation.

const myNums = [1, 2, 3];

// const myTotal = myNums.reduce( function( acc, currval) {
    
//     console.log(`Accumulator: ${acc} , currentValue: ${currval}`)
//     return acc + currval;
// },0 );

// console.log("Total sum is: ", myTotal)

const total = myNums.reduce( (acc, currVal) => {
    return acc + currVal;
} , 0)

console.log(total)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
