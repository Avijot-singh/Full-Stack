/*var name = "Avijot";
var get_char = name.slice(0, 1); // OR name = name.slice(0,1)
console.log(get_char);*/

const prompt = require('prompt-sync')();

var name = prompt("What is your name: ");
var first_char = name.slice(0, 1);
var rest = name.slice(1, name);
var concatinate = first_char + rest;

console.log("Hello, " + concatinate);


