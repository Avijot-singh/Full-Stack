/* To determine number of characters in a string */

// var name = "Avijot";

// console.log(name.length);

// How many characters written and have ramaining
const prompt = require('prompt-sync')(); // This line is external from a prompt-sync package to allow prompt to work in VSC

var tweet = prompt("Please enter a blog: ")

var calulate = tweet.length

var result = 140 - calulate

console.log("Your total count is " + calulate + " remaining left is: " + result);