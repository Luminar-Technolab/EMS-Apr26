import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import User from './pages/User'
import Dashboard from './pages/Dashboard'
import Manage from './pages/Manage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/admin' element={<Dashboard/>} />
        <Route path='/add' element={<Manage/>} />
        <Route path='/:id/edit' element={<Manage/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
