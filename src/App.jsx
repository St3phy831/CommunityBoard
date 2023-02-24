import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Local Parks</h1>
      <div className='Container'>
        <Card></Card>
      </div>
    </div>
  )
}

export default App
