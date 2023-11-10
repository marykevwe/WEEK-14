import React from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'

function App() {
  return (
    <>
    <Navbar/>
      <Sidebar />
      <Body/>
      <Footer/>
    </>
  )
}

export default App