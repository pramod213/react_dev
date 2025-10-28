import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'



const App = () => {

  const user = 'Rahul'
  const age = 33
  return (
    <div>
      <Navbar/> 
      <Card/>
      <Card/>
    </div>
    
  )
}

export default App
