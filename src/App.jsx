import { useState } from 'react'

import './App.css'
import Quotebox from './Components/Quotebox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Quotebox/>
    </div>
  )
}

export default App
