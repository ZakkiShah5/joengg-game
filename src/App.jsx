import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from './components/Loading'; 
import { Box, Main, Mix, My, Ranking, Rewards, Wallet, Sell } from './pages';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer); 
  }, []);

  if (isLoading) {
    return <Loading />; 
  }

  return (
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
  );
};

export default App;
