function timeLeft(current_age) {
    const days = 365;
    const weeks = 52;
    const months = 12;

    const calculate = months * 90 - current_age;
    console.log(calculate);
}

timeLeft(56)