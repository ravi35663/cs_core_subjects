import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from './TaskList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TaskList></TaskList>
  )
}

export default App
