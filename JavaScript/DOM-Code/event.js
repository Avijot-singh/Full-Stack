const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
    alert('I also love JavaScript!');
}
buttonTwo.addEventListener("click", alertBtn);

const buttonThree = document.querySelector('.box-3');

function changeBackground() {
    newbackgroundColor.style.changeBackground = 'blue';
}
newbackgroundColor.addEventListener("mouseover", changeBgColor);