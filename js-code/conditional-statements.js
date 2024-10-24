//condition ? true output : false output

// let age = 18;
// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);


// let age = 25;

// if (age >= 18) {
//     console.log("you can vote");
// }
// if (age < 18) {
//     console.log("you CANNOT vote");
// }


// let mode = "dark"
// let color;

// if(mode === "light"){
//     color = "White"
// }

// if(mode === "dark"){
//     color = "black"
// }

// console.log(color);


// let mode = "dark"
// let color;

// if (mode === "dark") {
//     color = "black"
// } else {
//     color = "White"
// }

// console.log(color);


// let age = 15;

// if (age >= 18) {
//     console.log("Vote");
// } else {
//     console.log("Not vote");
// }


// let num = 5;

// if (num%2 === 0) {
//     console.log(num, "is even");    
// } else {
//     console.log(num, "is odd");    
// }



// let mode = "light"
// let color;

// if (mode === "dark") {
//     color = "balck"
// } else if (mode === "light") {
//     color = "white"
// } else if (mode === "blue") {
//     color = "blue"
// } else {
//     color = "not in your data"
// }

// console.log(color);


// let age = 60;

// if (age <= 18){
//     console.log("junior");
// } else if (age >= 60){
//     console.log("senior");
// } else{
//     console.log("middle");   
// }



// let name = prompt("hello!");
// console.log(name);
// let num = prompt("enter a number");
// if (num % 3 === 0){
//     console.log(num, "is multiple of 3");
// } else{
//     console.log(num, "is NOT a multiple of 3");

// }

// let scores = prompt("enter your score (0-100)");


// if (scores >= 90 && scores <= 100) {
//     grade = "A"
// } else if (scores >= 70 && scores <= 89) {
//     grade = "B"
// } else if (scores >= 60 && scores <= 69) {
//     grade = "C"
// } else if (scores >= 50 && scores <= 59) {
//     grade = "D"
// } else {
//     grade = "F"
// }

// console.log("your grade is", grade);


// if (scores >= 80) {
//     console.log("A");
// } else if (scores >= 70) {
//     console.log("B");
// } else if (scores >= 60) {
//     console.log("C");
// } else if (scores >= 50) {
//     console.log("D");
// } else {
//     console.log("F");
// }






// let age = 18
// let hasVoterCard = "Yes"

// if (age >= 18 && hasVoterCard === "Yes") {
//     console.log("you can vote");
//     // console.log("good you have voter card");
// } else {
//     console.log("you can not vote");
//     // console.log("sorry you don't have voter card");
// }

// let age = prompt("Please enter your age:");
// let hasVoterCard = prompt("You Have voter id card Yes/No")

// if (age >= 18 && hasVoterCard == "Yes") {
//     console.log("you can vote");
// } else if (age >= 18 && hasVoterCard != "Yes") {
//     console.log("Pleae get your voter id card");
// } else {
//     console.log("you can not vote");
// }

// if (age >= 18) {
//     if (hasVoterCard == "Yes") {
//         console.log("you can vote");
//     } else {
//         console.log("Pleae get your voter id card");
//     }
// } else {
//     console.log("you can not vote");
// }


let isLoggedIn = 1; // if 0 loggedout if 1 login

// if (isLoggedIn == 0) {
//     console.log("Login");
// } else {
//     console.log("Logout");
// }



// let logCheck = isLoggedIn == 1 ? "Logout" : "Login"
// //               condition     ?    true  :   false
// console.log(logCheck);



// let user;
// // user = "margish"
// console.log(user ?? "Guest User");


let input;

input = 1;

// if (input === 1 || input === "y" || input === "yes") {
//     console.log("continue...");
// } else if (input === 0) {
//     console.log("end...");
// } else if (input === "n") {
//     console.log("end...");
// } else if (input === "no") {
//     console.log("end...");
// } else {
//     console.log("Wrong...");
// }


// switch (input) {
//     case 1: //if (input === 1)
//     case "y": //if (input === "y")
//     case "yes": //if (input === "yes")
//         console.log("Continue...");
//         break;
//     case 0: //if (input === "0")
//         console.log("A End...");
//         break;
//     case "n": //if (input === "n")
//         console.log("B End...");
//         break;
//     case "no": //if (input === "no")
//         console.log("C End...");
//         break;

//     default:
//         console.log("Wrong...");
//         break;
// }


//Q1) Check Even or Odd:
//Write a program that asks the user to input a number and checks whether the number is even or odd.

// let num = 11;

// if (num % 2 === 0) {
//     console.log(num, "is even");
// } else {
//     console.log(num, "is odd");
// }



//Q2) Voting Eligibility:
//Write a program that checks whether a person is eligible to vote based on their age (18 or above).

// let age = 28;

// if(age >= 18){
//     console.log("You can vote");  
// } else{
//     console.log("you cannot vote");
// }

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


//Q3) Compare two numbers and print the larger one.

// let a = 30;
// let b = 45;

// if (a > b) {
//     console.log(a);
// } else if (b > a) {
//     console.log(b);
// }



//Q4: Determine if a string contains more than 5 characters.

// let str = "Hello"

// if (str.length > 5) {
//     console.log(str, "More than 5 characters");
// } else if (str.length <= 5) {
//     console.log(str, "5 and Less than 5 characters");
// }



// Check if a number is divisible by 2 and 3.
// Determine if a string starts with the letter "A".
// Check if a given year is a leap year or not.
// Compare the lengths of two strings and print which one is longer.
// Check if a variable is a number or not.
