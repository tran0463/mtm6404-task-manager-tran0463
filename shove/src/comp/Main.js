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


// Most useless way to use child prop
function Title (props) {
    return <h2>{props.children}</h2>
}

// list rendering

const Shopping = [
    {listItem:"apple"},
    {listItem:"banana"},
    {listItem:"cucumber"},
    {listItem:"pineapple"},
    {listItem:"watermelon"}
]
const Gifts = [
    {listItem:"dog toy"},
    {listItem:"knife"},
    {listItem:"desk"},
    {listItem:"computer"},
    {listItem:"car"}
]
const Games = [
    {listItem:"go"},
    {listItem:"checkers"},
    {listItem:"chess"},
    {listItem:"battleship"},
    {listItem:"risk"}
]
const Empty = []

// Conditional Rendering
export default function Main({showList}) {
    //Depending on the prop passed, it will show a different list
        
        if (showList == "Shopping") {
        const list = Shopping.map(item => 
        <div className="task">
            <div>
                <input type="checkbox" />
                <ul>{item.listItem}</ul>
            </div>
        </div>)

        return (
            <div className="main">
                {list.length > 0 && <Title>{showList}</Title>}
                {list.length == 0 && <h2>This list is currently empty</h2>}
                {/* Possible to have both elements rendered in one condition check? */}
                {list.length > 0 && <div>{list}</div>}
            </div>
    )}

     else if (showList == "Gifts") {

        const list = Gifts.map(item => 
            <div className="task">
                <div>
                    <input type="checkbox" />
                    <ul>{item.listItem}</ul>
                </div>
            </div>)

        return (
            <div className="main">
                {list.length > 0 && <Title>{showList}</Title>}
                {list.length == 0 && <h2>This list is currently empty</h2>}
                {list.length > 0 && <div>{list}</div>}
            </div>
    )} 
    
    else if (showList == "Games") {

        const list = Games.map(item => 
            <div className="task">
                <div>
                    <input type="checkbox" />
                    <ul>{item.listItem}</ul>
                </div>
            </div>)
            
        return (
            <div className="main">
                {list.length > 0 && <Title>{showList}</Title>}
                {list.length == 0 && <h2>This list is currently empty</h2>}
                {list.length > 0 && <div>{list}</div>}
            </div>
    )} 
    
    else {
        // default case
        return (
            <div className="main">
                <p>No list selected</p>
            </div>
        )} 
}