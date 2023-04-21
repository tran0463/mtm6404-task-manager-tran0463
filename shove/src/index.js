import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './comp/Header'
import Lists from './comp/Lists'
import Main from './comp/Main'
import Footer from './comp/Footer'
import * as styles from './style.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

// let selectedList = ''
// let selectedList = 'Shopping'

function App() {
  return (
    <div>
      <Header />
      {/* <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Lists' element={<Lists />} />
      </Routes> */}
      <Footer />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>    
      <App />
    </BrowserRouter>

  </React.StrictMode>
)