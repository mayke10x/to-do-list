function returnElementTagFormated(nameTask) {
    return '<div><input type="checkbox" name="check" id="check"><label for="check1"> '+ nameTask +'</label></div>'
}

function addNewTask() {
    var newTask = document.getElementsByName('add')[0]
    var localTasks = document.getElementsByClassName('list-to-do')[0];

    localTasks.insertAdjacentHTML('beforeend', returnElementTagFormated(newTask.value));
    newTask.value = ''
}