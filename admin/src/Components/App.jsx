import React from 'react'
import Navbar from './Navbar/Navbar'
import "../index.css"
import Sidebar from './Sidebar/Sidebar'
import AddProduct from './AddProduct/AddProduct'

function App() {

  return (
    <div>
      <Navbar />
      <Sidebar />
      <AddProduct />
    </div>
  )
}

export default App
