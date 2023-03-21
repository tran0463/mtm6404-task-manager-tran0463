import { useState } from 'react'
let list = []
// let id = 1
// let selected = []
if (localStorage.length > 0) {
    list = JSON.parse(localStorage.getItem('list'))
}
// console.log(list)


// sort list before display
let sortedList
function sortList() {
    sortedList = list.sort((l1, l2) => (l1.priority > l2.priority) ? 1 : (l1.priority < l2.priority) ? -1 : 0)
}
sortList()

console.log(sortedList)
export default function Main() {
    const [task, setTask] = useState(list)
    const [status, setStatus] = useState(list.completed)

    const completeTask = (e) => {
        setStatus(
            list.completed = "Complete",
            console.log(task)
        )
    }

    const handleClick = (e) => {
        e.preventDefault()
        setTask(
            list.push({
            name: e.target[0].value,
            priority: e.target[1].value,
            completed: e.target[2].value,
            // index:
        })
        )
        localStorage.setItem("list", JSON.stringify(list))
    }
        
        sortList()  
    return (
        <div className='main'>
            <form onSubmit={handleClick}>
                <label for="task">Task: </label>
                <input id="task" type="text" />
                <select name="priority">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <select name="status">
                    <option>Incomplete</option>
                    <option>Complete</option>
                </select>
                <input type="submit" value="Add Task"/>
            </form>

            {list.map((task, index) => (
                <div className="task" key={index}>
                    <div>
                        <div>
                            <input type="checkbox" onClick={completeTask}/>
                            <h3>{task.name}</h3>
                        </div>
                        <h4>Priority: {task.priority}</h4>
                        <h4>Status: {task.completed}</h4> 
                    </div>
                </div>    
            ))}
            
        </div>
    )
}