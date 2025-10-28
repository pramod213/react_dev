import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>

      <Card user = 'Aman Sharma' age = {18} img = "https://images.unsplash.com/photo-1761538087574-41254b89f252?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"/>
      <Card user = 'Vivek Srivastav' age = {23} img = "https://plus.unsplash.com/premium_photo-1760386367223-f418541fbc2c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=715"/>
      <Card user = 'Sahil Gupta' age = {26} img = "https://images.unsplash.com/photo-1759031807436-bffa8890cc5c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"/>

    </div>
  )
}

export default App
