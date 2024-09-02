/* node.event = (e) => {
 handle here    
}*/
// All event handlers have access to the Event Object's propertie and methods 
// Event Object -> It is a special object that has details about the event

let btn = document.querySelector('#btn-1');

// btn.onclick  = (e) => { // e gives you the details about the event
//     console.log("handler");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
// };

// Event Listerners -> They are good listeners when assigned to a task they wait and listen and then exectute th
// node.addEventListerner(event,callback) event can be a click or dblclick, callback is als known as handler
// node.removeEventListerner(event,callback) calllback is like a function which stays in a different function like an argument 
btn.addEventListener('click', (e) => {
    console.log('button was clicked  - hamdler1');
    console.log(e.type);
});
btn.addEventListener('click', () => {
    console.log('button was clicked - handler2');
});
// Let's say we want to remove event 3
// Start by adding the event in a varibale
const handler3 = () => {
    console.log('button was clicked - handler3');
    
}
btn.addEventListener('click', handler3)
btn.addEventListener('click', () => {
    console.log('button was clicked - handler4');
});

btn.removeEventListener('click', handler3);
    

