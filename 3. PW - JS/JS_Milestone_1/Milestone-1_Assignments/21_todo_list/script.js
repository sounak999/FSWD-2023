// store the tasks in an array
const allTasks = []
const inputBtn = document.querySelector("input")
const addTaskBtn = document.querySelector("#add-task")
const taskList = document.querySelector('.all-tasks')


addTaskBtn.addEventListener("click", () => {
    const taskValue = inputBtn.value
    // console.log(taskValue)

    // when no value is given

    // if (taskValue.length === 0) {
    if (!taskValue) {
        alert('Please input something! 😃')
        return
    }
    // when task is already there in the list
    else if (allTasks.indexOf(taskValue) !== -1) {
        alert('This task is already added 😒')
        return
    }

    // pushing the tasks in the array
    allTasks.push(taskValue)

    // adding a task
    const list = document.createElement('li')
    list.classList.add('task')
    list.innerHTML = `<p>${taskValue}</p>
        <div class="btns">
            <button class="don-btn">Done</button>
            <button class="dlt-btn">Delete</button>
        </div>`

    taskList.appendChild(list)

    // done button
    const doneBtn = list.querySelector('.don-btn')
    doneBtn.addEventListener('click', () => {
        list.querySelector('p').style.textDecoration = 'line-through'
        list.querySelector('p').style.color = 'gray'
    })

    // delete button
    const delBtn = list.querySelector('.dlt-btn')
    delBtn.addEventListener('click', () => {
        allTasks.splice(allTasks.indexOf(taskValue), 1)
        list.remove()
    })

    // clear the input field
    inputBtn.value = ""
})


