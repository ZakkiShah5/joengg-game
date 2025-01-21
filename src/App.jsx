import './App.css'

import { Routes, Route } from 'react-router-dom'

import { Main, Wallet } from './pages'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/wallet' element={<Wallet />} />
    </Routes>

  )
}

export default App