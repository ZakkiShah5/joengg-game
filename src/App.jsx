import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Loading from './components/Loading'; // Import the Loading component
import { Box, Main, Mix, My, Ranking, Rewards, Wallet, Sell } from './pages';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  if (isLoading) {
    return <Loading />; // Show loading screen while loading
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
