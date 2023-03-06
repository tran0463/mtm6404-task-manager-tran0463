// export default function Main() {
//     return (
//         <div className="main">
//             <h2>Tasks</h2>
//             <div className="task">
//                 <div>
//                     <input type="checkbox" />
//                     <h3>Task Name</h3>
//                 </div>
//             </div>
//             <div className="task">
//                 <div>
//                     <input type="checkbox" />
//                     <h3>Task Name</h3>
//                 </div>
//             </div>
//             <div className="task">
//                 <div>
//                     <input type="checkbox" />
//                     <h3>Task Name</h3>
//                 </div>
//             </div>
//             <div className="task">
//                 <div>
//                     <input type="checkbox" />
//                     <h3>Task Name</h3>
//                 </div>
//             </div>
//             <div className="task">
//                 <div>
//                     <input type="checkbox" />
//                     <h3>Task Name</h3>
//                 </div>
//             </div>
//         </div>
//     )
// }




// list rendering

const listItems = [
    {task:"Task 1"},
    {task:"Task 2"},
    {task:"Task 3"},
    {task:"Task 4"},
    {task:"Task 5"}
]

export default function Main() {
    const list = listItems.map(item => 
        <div className="task">
            <div>
                <input type="checkbox" />
                <ul>{item.task}</ul>
            </div>
        </div>
    )

    return (
        <div className="main">
            <h2>Tasks</h2>
                {list}
        </div>
    )
}