let score = "35"
// let score = true / 1
// let score = false / 0
// let score = "35abc" / NaN
// let score = null / 0
// let score = undefined / NaN

// console.log(typeof score);

let valueInNumber = Number(score);

// console.log(typeof valueInNumber);
// console.log(valueInNumber);


/********************* Boolean ***********************/

let isLoggedIn = "margish" // true
// let isLoggedIn = "" // false
// let isLoggedIn = 1 // true
// let isLoggedIn = 0 // false

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn);



/********************* String ***********************/

let someNumber = 33

let stingSomeNumber = String(someNumber)

// console.log(someNumber);
// console.log(typeof someNumber);


/********************* Operations ***********************/

let value = 3
let negValue = -value

// console.log(negValue);

let str1 = "hello"
let str2 = " margish"
let str3 = str1 + str2

// console.log(str3);



// (Prefix Postfix js mdn)
/// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

let gameCounter = 100
++gameCounter;
// gameCounter++;

console.log(gameCounter);