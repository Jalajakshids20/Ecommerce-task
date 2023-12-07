import { useState } from 'react'


import './App.css'
import Header from './Components/Header/Header'
import Shop from './Components/Shop/Shop'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Header></Header>
     <Shop></Shop>
     <Footer></Footer>
    </div>
  )
}

export default App
