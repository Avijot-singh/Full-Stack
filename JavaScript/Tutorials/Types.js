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