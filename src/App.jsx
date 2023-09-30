import { useEffect, useState } from 'react'
import AppProvider from "./context/index"
import './App.css'
import Home from './constainers/appStack/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './constainers/Login'
import Products from './constainers/appStack/Products'
import Banners from './constainers/appStack/Banners'
import Categories from './constainers/appStack/Categories'

function App() {

  


  useEffect(()=>{
    const authToken = localStorage.getItem("users")
    if(authToken){
     setIsLoggedIn(true)
    }
  },[])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <AppProvider>
      {isLoggedIn ? (
        <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/banners' element={<Banners/>}/>
      <Route path='/categories' element={<Categories/>}/>
    </Routes>
      ):(
      <Navigate to="/" replace/>
      )}
    
      
    
    </AppProvider>
  )
}

export default App
