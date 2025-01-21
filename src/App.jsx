import './App.css'

import { Routes, Route } from 'react-router-dom'

import { Main, My, Ranking, Rewards, Wallet } from './pages'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/wallet' element={<Wallet />} />
      <Route path='/ranking' element={<Ranking />} />
      <Route path='/my' element={<My />} />
      <Route path='/rewards' element={<Rewards />} />
    </Routes>

  )
}

export default App