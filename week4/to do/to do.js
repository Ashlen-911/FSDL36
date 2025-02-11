function addTask() {
    const input = document.getElementById('todoInput');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;
    li.addEventListener('click', function() {
        this.remove();
    });

    document.getElementById('todoList').appendChild(li);
    input.value = '';  // Clear input field
}
