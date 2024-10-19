import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Features from './components/Features'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <header>
      <h1>Quality feedbacks for sass products</h1>
      <h2>The blocks & components you need</h2>
     </header>
     <main>
      <Features/>

     </main>
    </>
  )
}

export default App
