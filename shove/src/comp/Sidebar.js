export default function Sidebar() {
// Need to add event listener to allow list to change between whatever's clicked
    return (
        <div className="sidebar">
            <h2>Lists</h2>
            <ul>
                <li><a>Shopping</a></li>
                <li><a>Gifts</a></li>
                <li><a>Games</a></li>
            </ul>
        </div>
    )
}