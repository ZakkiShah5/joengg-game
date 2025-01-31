import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Box, Main, Mix, My, Ranking, Rewards, Wallet, Sell } from './pages';
import { MuteProvider } from './Context/VolumeContext';

const App = () => {
  

  return (
    <MuteProvider>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/my" element={<My />} />
      <Route path="/rewards" element={<Rewards />} />
      <Route path="/bag" element={<Box />} />
      <Route path="/mix" element={<Mix />} />
      <Route path="/sell" element={<Sell />} />
    </Routes>
    </MuteProvider>
  );
};

export default App;
