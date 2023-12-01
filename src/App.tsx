import { useState, createContext } from 'react'
import { Outlet } from "react-router-dom";
import { Navbar } from './Nav'

export const ShopContext = createContext({})


function App() {
  const [count, setCount] = useState(0)
  const [cartItems, setCartItems] = useState([])

  return (
    <ShopContext.Provider value={{ count, setCount, cartItems, setCartItems }}>
      <div className='w3-cell'>
        < Navbar />
        <div className="w3-container w3-padding-48 w3-margin-top">
          <Outlet />
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </ShopContext.Provider>
  )
}

export default App
