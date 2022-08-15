import React from 'react';

import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Nextpage from './pages/Nextpage';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/nextpage" element={<Nextpage />} />
      </Routes>
    </div>
  );
};

export default App;
