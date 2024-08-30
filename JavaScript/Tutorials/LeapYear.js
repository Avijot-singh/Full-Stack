/*
This is a Difficult Challenge
Write a program that works out whether if a given year is a leap year. A normal year has 365 days, leap years have 366, with an extra day
in February. The reason why we have leap years is really fascinating, this video goes into more detail.
This is how to work out whether if a particular year is a leap year:
on every year that is evenly divisible by 4
except every year that is evenly divisible by 100
unless the year is also evenly divisible by 400  */

function isLeap(year) {
    if (year % 4 === 0) { // The year % 4 checks if 4 the year is divisible by 4 with no remainder
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap Year"
            }
            else {
                return "not as leap year"
            }
        }
        else {
            return "leap year"
        }

    }
    else {
        return "it is not a leap year"
    }

}

let years = isLeap(1989);
console.log(years)