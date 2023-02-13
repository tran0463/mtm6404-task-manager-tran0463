import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './comp/Header'
import Sidebar from './comp/Sidebar'
import Main from './comp/Main'
import Footer from './comp/Footer'
import * as styles from './style.css'

function Page() {
    return (
        <div>
        <Header />
        <Sidebar />
        <Main />
        <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Page />);