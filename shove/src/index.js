import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './comp/Header'
import Sidebar from './comp/Sidebar'
import Main from './comp/Main'
import Footer from './comp/Footer'
import * as styles from './style.css'

// let selectedList = ''
let selectedList = 'Shopping'

function Page() {
    return (
        <div>
        <Header />
        <Sidebar />
        <Main 
        showList={selectedList}
        />
        <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Page />);