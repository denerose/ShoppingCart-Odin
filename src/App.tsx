import { useState } from 'react'
import { Outlet } from "react-router-dom";
import { Navbar } from './Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w3-cell'>
      < Navbar count={count} />
      <div className="w3-container w3-padding-48 w3-margin-top">
        <Outlet />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
