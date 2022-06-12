import { useState } from 'react'
import logo from './logo.svg'
import './App.css';
import { Home } from './Component/Home';
import { Navbar } from './Component/Navbar'
import { Chakra1 } from './Component/Chakra1';
import { Chakra2 } from './Component/Chakra2';
import { Chakra3 } from './Component/Chakra3';
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
        

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/chakra1' element={<Chakra1/>}></Route>
        <Route path='/chakra2' element={<Chakra2/>}></Route>
        <Route path='/chakra3' element={<Chakra3/>}></Route>
      </Routes> 
    </div>
  )
}

export default App
