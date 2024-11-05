

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




//*********************** Quastion *******************************//

//Q1) Check Even or Odd:
//Write a program that asks the user to input a number and checks whether the number is even or odd.

// let num = 11;

// if (num % 2 === 0) {
//     console.log(num, "is even");
// } else {
//     console.log(num, "is odd");
// }

//************************************************************//

//Q2) Voting Eligibility:
//Write a program that checks whether a person is eligible to vote based on their age (18 or above).

// let age = 28;

// if(age >= 18){
//     console.log("You can vote");
// } else{
//     console.log("you cannot vote");
// }

//************************************************************//

//Q3) Positive, Negative, or Zero:
//Write a program to check if a number is positive, negative, or zero.

// let num = 5;

// if (num > 0) {
//     console.log("positive number");
// } else if (num < 0) {
//     console.log("nagative number");
// } else {
//     console.log("zero number");
// }

//************************************************************//

//Q3) Compare two numbers and print the larger one.

// let a = 30;
// let b = 45;

// if (a > b) {
//     console.log(a);
// } else if (b > a) {
//     console.log(b);
// }

//************************************************************//

//Q4: Determine if a string contains more than 5 characters.

// let str = "Hello"

// if (str.length > 5) {
//     console.log(str, "More than 5 characters");
// } else if (str.length <= 5) {
//     console.log(str, "5 and Less than 5 characters");
// }

//************************************************************//

//Q5 Check if a number is divisible by 2 and 3.
// let num = prompt("Enter Number...");

// if (num % 2 === 0 && num % 3 === 0) {
//     console.log(num, "Divisible by 2 and 3");
// } else {
//     console.log("Not Divisible by 2 and 3");
// }

//************************************************************//

//Q6 Determine if a string starts with the letter "A".
// let str = "Apple"

// console.log(str.charAt(0));

// console.log(str.charCodeAt(0));

// if (str.charAt(0) === "A") {
//   console.log(str, "is string starts with the letter A");
// } else {
//   console.log(str, "Is Not Starting From A");
// }

// Note: Method
// The at(position) Method
// The charAt(position) Method
// The charCodeAt(position) Method
// Using property access [] like in arrays


//************************************************************//


//Q7 Check if a given year is a leap year or not.

// let year = 2025

// if (year % 400 === 0) {
//   console.log(year, "is Leap Year");
// } else if (year % 100 === 0) {
//   console.log(year, "is not a leap year");
// } else if (year % 4 === 0) {
//   console.log(year, "is a leap year");
// } else {
//   console.log(year, "is not a leap year");
// }

//************************************************************//

// if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//   console.log("Checking leap year");
// } else{
//   console.log("Not a leap year");
// }

//************************************************************//

//Q8 Compare the lengths of two strings and print which one is longer.

// let str1 = "margishbabariya";
// let str2 = "nipababariya";

// if (str1.length > str2.length) {
//   console.log(str1, "is longer str1");
// } else if (str2.length > str1.length) {
//   console.log(str2, "is longer str2");
// }

//************************************************************//

//Q9 Check if a variable is a number or not.

// let numstrcheck = 123456

// console.log(typeof (numstrcheck));

// if (typeof numstrcheck === "number" && !isNaN(numstrcheck)) {
//   console.log(numstrcheck, "is a number");
// } else {
//   console.log(numstrcheck, "is not a number");
// }

//************************************************************//

//Q10 Check if a string ends with the letter "z".

// let str = "abc"

// if (str.endsWith("z") === true) {
//   console.log(str, "string ends with the letter z");
// } else {
//   console.log(str, "Not ends with the letter z");
// }

//************************************************************//

//Q11 Determine if a given temperature (in Celsius) is above or below freezing (0°C).

// let temp = 0;

// if (temp > 0) {
//   console.log(temp, 'Above Freezing');

// } else {
//   console.log(temp, 'Below Freezing');

// }

//************************************************************//

//Q12 Check if a number is between 10 and 50.

// let num1 = 25;

// if (num1 > 10 && num1 < 50) {
//   console.log(num1, "number is between 10 and 50");
// } else {
//   console.log(num1, "number is NOT between 10 and 50");
// }

//************************************************************//

//Q13 Determine if a given year is in the 21st century (years between 2001 and 2100).

// let year = 2024

// if (year >= 2001 && year <= 2100) {
//   console.log(year, "is in the 21st century");
// } else {
//   console.log(year, "is NOT in the 21st century");
// }

//************************************************************//

//Q14 Check if an array has more than 5 elements.


// let nameArray = ["margish", "chetan", "dhrumil", "raj", "viraj", "kaushik"];
// if (nameArray.length > 5) {
//   console.log(nameArray, "array has more than 5 elements");

// } else {
//   console.log(nameArray, "array has less than or equal to 5 elements");
// }

//************************************************************//

// Q15 Check for Vowel: Write a program that checks if a given character is a vowel (a, e, i, o, u).

// let char = prompt("Please enter character");

// let vowels = "aeiouAEIOU"
// if (vowels.includes(char)) {
//   console.log("Yeh ek vowel hai.");
// } else {
//   console.log("Yeh ek vowel nahi hai.");
// }

//************************************************************//



//************************************************************//


//************************************************************//