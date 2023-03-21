import { useState } from 'react'
let list = []
let id = 0
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

    const handleClick = (e) => {
        e.preventDefault()
        list.push({
            name: e.target[0].value,
            priority: e.target[1].value,
            status: e.target[2].value,
            index: id
        })
        localStorage.setItem("list", JSON.stringify(list))
        setCount(count + 1)
        id++
        sortList()
    }

    const markComplete = (e) => {
        selected.forEach(element => {
            console.log(element)
            list[element].status = 'Complete'
            console.log(list)
        });
    }    
    
    const markIncomplete = (e) => {
        
    }    
    
    const deleteSelected = (e) => {
        
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
                    <option value={' '}>!</option>
                </select>
                <select name="status">
                    <option value={'Incomplete'}>Incomplete</option>
                    <option value={'Complete'}>Complete</option>
                </select>
                <input type="submit" value="Add Task"/>
            </form>

                <span className='complete' onClick={markComplete}>Mark Complete</span>
                <span className='incomplete' onClick={markIncomplete}>Mark Incomplete</span>
                <span className='delete' onClick={deleteSelected}>Delete</span>

            {list && list.map((list, Task) => 
            <div className="task" key={Task}>
                <div>
                    <div>
                        
                        <input type="checkbox" onClick={function selectedTask() {
                            // clicking checkbox will store task id to separate array
                            if (selected.find(id => id === list.index)) {
                                selected.splice(selected.indexOf(id),1)
                            } else {
                                selected.push(list.index)
                            }
                            console.log(selected)
                            console.log(list)
                        }} />



                        <h3>{list.name}</h3>
                    </div>
                    <h4>Priority: {list.priority}</h4>
                    <h4>Status: {list.status}</h4>
                </div>
            </div>  
            )}
        </div>
    )
}