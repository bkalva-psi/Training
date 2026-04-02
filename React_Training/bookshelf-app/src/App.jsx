import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const name = "Ravi"
  return (
    <>
      <h1>{2+3}</h1>
      <h1>{name}</h1>
    </>
  )
}


export default App
