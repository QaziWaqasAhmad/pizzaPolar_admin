import './App.css'
import { Route,  Routes } from 'react-router-dom'
import Login from "./screen/Auth/Login"
import Wrapper from './components/Wrapper'
function App() {

  return (
    <>
     <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/wrapper' element={<Wrapper/>}/>
     </Routes>
   
    
    </>
  )
}

export default App
