function BMI(Weight, Height) {
    let heightInMeters = Height / 100; // Converted height in CM to Meters
    let bmi = Weight / (heightInMeters * heightInMeters);
    let category;

    if (bmi >= 35) {
        category = "you are Extremely Obese";
    }
    if (bmi >= 30 && bmi <= 34.9) {
        category = "You are Obese";
    }
    if (bmi >= 25 && bmi <= 29.9) {
        category = "You are OverWeight";
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
        category = "You are Normal";
    }
    else {
        category = "You are UnderWeight";
    }
    return category
}
const advanced = BMI(80, 180);
console.log(advanced)