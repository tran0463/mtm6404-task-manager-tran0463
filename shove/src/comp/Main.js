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

export default function Main() {
    const [task, setTask] = useState(list)

    function updateStatus(e) {
        if (task[e.target.id].status == 'Incomplete' ) {
          task[e.target.id].status = 'Complete' 
        }
        else task[e.target.id].status = 'Incomplete'
        
        // force state to update when clicking checkbox to update whether task is complete
        setTask(force => {
            return {...force}
        })

        // update the local storage immediately on completion
        localStorage.setItem("list", JSON.stringify(list))
    }

    const handleClick = (ev) => {
        const {
            target: { id, value },
        } = ev;

        ev.preventDefault()
        setTask(
            list.push({
            name: ev.target[0].value,
            priority: ev.target[1].value,
            status: ev.target[2].value,
            id: list.length
            // index:
        })
        )
        localStorage.setItem("list", JSON.stringify(list))
    }
    sortList()  

    // function createNewList(e) {
    //     e.preventDefault()
        
    //     const userList = new Array(e.target[0].value)
    //     console.log(userList)
    // }

    return (
        // render form to add task
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
            <form onSubmit={createNewList}>
            {/* <label for="newList">Create new list: </label>
            <input id="newList" type="text" />
            <input type="submit" value="Add List"/> */}
            </form>


            {/* render list */}
            {list.map((task, index) => (
                <div className="task" key={index}>
                    <div>
                        <div>
                            <input 
                            type="checkbox"
                            defaultChecked={task.status === "Complete"}
                            id={index}
                            onClick={updateStatus}
                            />
                            <h3>{task.name}</h3>
                        </div>
                        <h4>Priority: {task.priority}</h4>
                        <h4>Status: {task.status}</h4> 
                    </div>
                </div>    
            ))}
            
        </div>
    )
}