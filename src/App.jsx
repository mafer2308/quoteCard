import { useState } from 'react'

import './App.css'
import IconRandon from './Components/IconRandon'
import Quotebox from './Components/Quotebox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Quotebox/>
      <IconRandon/>
      
    </div>
  )
}

export default App
