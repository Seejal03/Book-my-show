import React from 'react'
import Home from './Pages/Home'
import BsState from './Context/BsState'
const App = () => {
  return (
    <div>
      <BsState><Home/></BsState></div>
  )
}

export default App