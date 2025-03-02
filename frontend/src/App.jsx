import { useState } from 'react'
import pawLogo from '/paw-icon.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a>
          <img src={pawLogo} className="logo"/>
        </a>
      </div>
      <h1>Paw Match</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
