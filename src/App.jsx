import React from 'react'
import "./app.scss"
import Dock from './components/Dock'
import MacWindow from './components/Windows/MacWindow'
const App = () => {
  return (
    <main>
      <Dock/>

      <MacWindow/>
    </main>
  )
}

export default App