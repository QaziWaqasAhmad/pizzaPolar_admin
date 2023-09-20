import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppProvider from "./context/index"
import './App.css'
import Home from './constainers/appStack/Home'

function App() {

  return (
    <AppProvider>
    <Home/>
    </AppProvider>
  )
}

export default App
