// for (let count = 1; count <= 50; count++){
//     console.log("Margish Patel");
// }

let sum = 0;
let n = 5;
// for (let i = 1; i <= 5; i++) {
//     sum = sum + i
// }
// for (let i = 1; i <= n; i++) {
//     sum = sum + i
// }

// console.log("sum =", sum);

// for(let i = 1; i <= 5; i++){
//     console.log(`i = ${i}`);
// }

// for(let i = 1; i <= 100; i++){
//     console.log(`i = ${i}`);
// }


//while loop
// let i = 1;
// while (i <= 5) {
//     console.log(`i = ${i}`);
//     i++;
// }

// let i = 0;
// while (i <= 100) {
//     console.log(`i = ${i}`);
//     i++;
// }



//do while loop
// let i = 1;
// do {
//     console.log("Margish Patel");
//     i++;
// } while (i <= 5);


//for-of loop
// let str = "Margish"
// for (let i of str) {
//     console.log(`i = ${i}`);
// }

// let str = "Margish"
// let size = 0
// for (let val of str) {
//     console.log(`val = ${val}`);
//     size++;
// }

// console.log(`string size = ${size}`);


//for-in loop
// let student = {
//     name: "Margish Patel",
//     age: 25,
//     cgpa: 7.5,
//     isPass: true,
// }

// for (let key in student) {
//     console.log(`key= ${key}`, `value=`, student[key]);
// }



//Practice Qs1

// for(let num = 1; num <= 100; num++){
//     if(num%2 ===0){
//         console.log("num=", num);
//     }
// }

//Practice Qs2

// let gameNum = 25;

// let userNum = prompt("Guess the game number");

// while (userNum != gameNum) {
//     userNum = prompt("You entered wrong number. Guess again:")
// }

// console.log("You are winner of this game.");








//Strings
// let str = "Margish Patel"
// console.log(str[5]); //s


//Template Literals
// let specialString = `This is a template literal`
// console.log(typeof specialString);

// let obj = {
//     item: "pen",
//     price: 10,
// }
// console.log(`the cost of ${obj.item} is ${obj.price} ruppes / ${2+3+5}`);

// console.log("the cost of", obj.item, "is", obj.price, "ruppes");













// let age = prompt("Please enter your age for license registration.");

// if (age <= 17) {
//   console.log("You are an adult, Not eligible for licence");
// } else if (age >= 18) {
//   console.log("You are eligible for licence");
// }

// Jan, Feb, Mar


// let salary = parseInt(prompt("Plese enter your salary"));

// (salary > 0 && salary < 5000) ? alert(`your salary is ${salary} and your incremented salary is ${salary + 5000} increment amount is ${5000}`) : alert(`your salary is ${salary} and your incremented salary is ${salary + 400} increment amount is ${400}`)

// if (salary > 0 && salary < 5000) {
//   let incr = salary * 100 / 100;
//   alert(`your salary is ${salary} and your incremented salary is ${salary + incr} increment amount is ${incr}`)
// } else if (salary > 5000 && salary < 10000) {
//   // console.log("increment is 2000");
//   // salary += 2000
//   // alert("salary is" + salary + "incremented salary is" + salary + 2000)
//   // alert(`your salary is ${salary} and your incremented salary is ${salary + 2000}`)
//   // console.log("salary is", salary, "incremented salary is", salary + 2000);
//   let incr = salary * 20 / 100;
//   alert(`your salary is ${salary} and your incremented salary is ${salary + incr} increment amount is ${incr}`)
// } else if (salary >= 10000 && salary < 20000) {
//   let incr = salary * 15 / 100;
//   alert(`your salary is ${salary} and your incremented salary is ${salary + incr} increment amount is ${incr}`)
// } else if (salary >= 2000 && salary < 30000) {
//   let incr = salary * 10 / 100;
//   alert(`your salary is ${salary} and your incremented salary is ${salary + incr} increment amount is ${incr}`)
// } else if (salary >= 30000 && salary < 40000) {
//   let incr = salary * 8 / 100;
//   alert(`your salary is ${salary} and your incremented salary is ${salary + incr} increment amount is ${incr}`)
// } else {
//   let incr = salary * 3 / 100;
//   alert(`your salary is ${salary} and your incremented salary is ${salary + incr} increment amount is ${incr}`)
// }


// console.log(5000 * 10 / 100);

// let month = "december";
// let month = prompt("Plese enter month");

// if (month === "december" || month === "january" || month === "february") {
//   alert("It's a winter");
// } else if (month === "march") {
//   alert("It's a summer");
// } else if (month === "june") {
//   alert("It's a monsoon");
// } else if (month === "september") {
//   alert("It's a autumn");
// } else {
//   alert("Not Working");
// }

//Winter: december, january, february
// Spring: march, april, may
// Summer: june, july, august
// Autumn: september, october, november

// switch (month) {
//   case "december":
//   case "january":
//   case "february":
//     alert("It's a winter");
//     break;
//   case "march":
//     alert("It's a summer");
//     break;
//   case "june":
//     alert("It's a monsoon");
//     break;
//   case "september":
//     break;
//   default:
//     alert("Not Working");
//     break;
// }












//01). Positive, Negative, or Zero: Write a program that checks if a number is positive, negative, or zero and prints an appropriate message.


// let num = prompt("Please Enter number");

// if (num > 0) {
//   console.log(num, "is Positive");
// } else if (num == 0) {
//   console.log(num, "is Zero");
// } else {
//   console.log(num, "is Negative");
// }




//02) Leap Year Checker: Write a function that takes a year as input and determines if it is a leap year or not. (Hint: A leap year is divisible by 4 but not by 100 unless it is also divisible by 400.)

// Agar year 400 se divisible hai, toh directly leap year hai.
// Agar year 100 se divisible hai aur 400 se nahi, toh leap year nahi hai.
// Agar year 4 se divisible hai lekin 100 se nahi, toh leap year hai.

// let year = prompt("Enter Year");

// if (year % 400 === 0) {
//   console.log("Leap Year");
// } else if (year % 100 === 0) {
//   console.log("Not Leap Year");
// } else if (year % 4 === 0) {
//   console.log("Leap Year");
// } else {
//   console.log("Not Leap Year");
// }


//03) Larger of Two Numbers: Write a program that takes two numbers and prints which one is larger. If they are equal, print "Both numbers are equal."

// let num1 = prompt("Number 1");
// let num2 = prompt("Number 2");

// if (num1 > num2) {
//   console.log(num1, "is Larger");
// } else if (num2 > num1) {
//   console.log(num2, "is larger");
// } else {
//   console.log("Not Working");
// }


