/*
BMI - Weight(kg)
height2(m2)*/

function bmiCalculator(weight, height) {
    const BMI = weight / (height * height); // height * height is saying height sqaured ^2 and putting it in round brackets means to calculate that first
    return BMI
}

const Calcu = bmiCalculator(65, 1.8);
console.log(Calcu);