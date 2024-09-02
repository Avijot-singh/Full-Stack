// Select the form and task list elements
const form = document.querySelector('form');
const tasklist = document.querySelector('#task-list');

// Function to add a task to the list
function addTask(task) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<input type="checkbox" /> <span>${task}</span> <button class="delete-btn">Delete</button>`;
    tasklist.appendChild(listItem); // Append the list item to the task list
}
// Event listener for the form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    const input = document.querySelector('#task-input');
    const task = input.value; // Get the value of the input field
    if (task) { // Ensure that the task is not empty
        addTask(task);
        input.value = ''; // Clear the input field after adding the task
    }
});
console.log(form);
console.log(tasklist);