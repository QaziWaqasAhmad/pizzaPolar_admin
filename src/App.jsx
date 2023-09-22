import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppProvider from "./context/index"
import './App.css'
import Home from './constainers/appStack/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './constainers/Login'
import Products from './constainers/appStack/Products'
import Banners from './constainers/appStack/Banners'

function App() {

  return (
    <AppProvider>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/banners' element={<Banners/>}/>
      
    </Routes>
      
    
    </AppProvider>
  )
}

export default App
