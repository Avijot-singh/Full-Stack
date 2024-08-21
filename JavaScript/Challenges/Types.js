const yearsUntilRetirement = (birtYear, firstName) => {
    const age = 2024 - birtYear;
    const retirement = 65 - age;

    return `${firstName} retires in ${retirement} years`;
}

// More normal function expression 
const yearsUntilRetirements = function (birtYear, firstName) {
    const age = 2024 - birtYear;
    const retirement = 65 - age;

    return `${firstName} retires in ${retirement} years`;
}

const calcAge = function (birthYear){ // Different functions different paramters even if they have the same name
    return 2024 - birthYear; // Paramters are like local variables to functions
}

const yyearsUntilRetirements = function (birtYear, firstName) {
    const age = calcAge(birtYear)
    const retirement = 65 - age;

    if(retirement > 0){

        return retirement
    }
    else{
        return -1
    }

    //return `${firstName} retires in ${retirement} years`;
}

console.log(yyearsUntilRetirements(2002, 'Avi'));

// Functions Review: 3 Different FUnction Types 
// Doesnt matter what function we use we can achieve the same output

// Function declaration
function calcAgee(birthYear) { // Function that can be used before it's declared
    return 2037 - birthYear
}
// Function expression
const calcAgeee = function (birthYear){ // Essentially a function value stored in a variable
    return 2037 - birthYear;
};

// Arrow function
const calcAgeeee = birthYear => 2037 - birthYear; // Great for a quick one-line function, has no :this: keyword

function calage(birthYear, firstName){
    const age = 2037
}