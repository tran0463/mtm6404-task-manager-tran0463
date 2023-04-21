import { Link } from "react-router-dom";

export default function Lists() {
// Need to add event listener to allow list to change between whatever's clicked
    return (
        <div>
            <h2>Here are your lists</h2>
            <ul>
                <li><Link to='/'>Default</Link></li>
            </ul>
        </div>
    )
}