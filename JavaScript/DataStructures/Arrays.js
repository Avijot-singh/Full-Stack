// Two famous datastractures are arrays and objects 
'use strict';
const friends = ['Avi','Steven','Matt'];
console.log(friends);

const years = new Array(1991,1992,1993,1994);
console.log(years);

// Get element 
console.log(friends[0]); // This will get us the first element in our case Avi using indexes
console.log(friends.length); // Return the length of an array

console.log(friends[friends.length -1]); // This will get us the last element of an array


friends[2] = 'Jay'; // Replaces the item in that index, array can be mutant so even as declaring as an const we can modify it
console.log(friends);
// Although we cant do this 
// friends = ['Bob','Avi'];

const firstName = 'Avi';

const name = [firstName, "Singh", 2024 - 2002, 'student', friends];
console.log(name)

// Array Excersice 
const calcAge = function(birthYear){
    return 2024 - birthYear;
}
const multiple_years = [1990,1860,2000,2002];
const age1 = calcAge(multiple_years[0]);
const age2 = calcAge(multiple_years[1]);
const age3 = calcAge(multiple_years[2]);
const age4 = calcAge(multiple_years[multiple_years.length - 1]);
console.log(age1,age2,age3,age4);

const ages = [calcAge(multiple_years[0]), calcAge(multiple_years[1])];

console.log(ages);