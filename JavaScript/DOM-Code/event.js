// DOM Manipulation 

// Event Listeners
// elments.addEventListner("click", function);
const buttonTwo = document.querySelector('.btn-2');
function alertBtn(){
    alert('I also love JavaScript!');
};
buttonTwo.addEventListener("click", alertBtn);