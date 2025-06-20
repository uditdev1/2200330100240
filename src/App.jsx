import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-zinc-900 '>
      <div className="text-5xl text-neutral-200">
        Hello Tailwind test 
      </div>
    </div>
  )
}

export default App
