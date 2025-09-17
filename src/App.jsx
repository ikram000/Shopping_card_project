import React from 'react'
import Counter from './Components/Counter'
import Product from './Components/Product'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const App = () => {
 
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
 {/* <Counter/> */}
 <Route path='/' element={<Product/>}/>
 <Route path='Card' element={<Card/>}/>
</Routes>
    </BrowserRouter>
  )
}

export default App