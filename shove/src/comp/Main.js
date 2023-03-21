import { useState } from 'react'
let list = []
let id = 1
let selected = []
if (localStorage.length > 0) {
    list = JSON.parse(localStorage.getItem('list'))
    id = list.length
}
console.log(list)


// sort list before display
let sortedList
function sortList() {
    sortedList = list.sort((l1, l2) => (l1.priority > l2.priority) ? 1 : (l1.priority < l2.priority) ? -1 : 0)
}
sortList()

console.log(sortedList)
export default function Main() {
    const [count, setCount] = useState("")
    const [handleClickUpdate, setHandleClickUpdate] = useState("")

    const handleClick = (e) => {
        e.preventDefault()
        list.push({
            name: e.target[0].value,
            priority: e.target[1].value,
            completed: e.target[2].value == 'true' ? true : false,
            index: id,
        })
        localStorage.setItem("list", JSON.stringify(list))
        setCount(count + 1)
        id++
        sortList()
    }

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
                <select name="completed">
                    <option value={false}>Incomplete</option>
                    <option value={true}>Complete</option>
                </select>
                <input type="submit" value="Add Task"/>
            </form>

                {/* <span className='complete' onClick={markComplete}>Mark Complete</span>
                <span className='incomplete' onClick={markIncomplete}>Mark Incomplete</span>
                <span className='delete' onClick={deleteSelected}>Delete</span> */}

            {list && list.map((element, Task) => 
            <div className="task" key={Task}>
                <div>
                    <div>
                        
                        <input type="checkbox" onClick={function selectedTask(event) {
                            // clicking checkbox will store task id to separate array
                            // const item = selected.find(id => id === element.index) 
                            // if (item)  { // MUST be indexOf
                            //     item.completed = false
                            //     // selected = selected.splice(selected.indexOf(list.index),1)

                            // }
                            //  else {
                            //     item.completed = true
                            //     // selected.push(list.index)
                            // }
                            element.completed = event.currentTarget.checked
                            setHandleClickUpdate(handleClickUpdate + 1)
                            console.log(selected)
                            console.log(element)
                        }} />



                        <h3>{element.name}</h3>
                    </div>
                    <h4>Priority: {element.priority}</h4>
                    <h4>Status: {element.completed ? "Completed" : "Incomplete"} </h4> 
                </div>
            </div>  
            )}
        </div>
    )
}