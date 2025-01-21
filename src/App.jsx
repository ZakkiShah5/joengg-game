import './App.css'

import { Routes, Route } from 'react-router-dom'

import { Main, Ranking, Wallet } from './pages'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/wallet' element={<Wallet />} />
      <Route path='/ranking' element={<Ranking />} />
    </Routes>

  )
}

export default App