import { Route, Routes, Link } from "react-router-dom";
import Lists from './Lists'
import Main from './Main'

export default function Header() {
    return (
        <>
        <div className="header">
            <Link to='/'><h1>Shove</h1></Link>
            <Link to='/Lists'><h2>Lists</h2></Link>


        </div>
        
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/Lists' element={<Lists />} />
        </Routes>
        </>
    )
}