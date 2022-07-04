import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import { MovieCard } from './pages/MovieCard/MovieCard';
import Home from './pages/Home/Home';


const App: React.FC = () => {
  console.log('render app');

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to='/home' replace={true} />} />
        <Route path='/home' element={<Home />} />
        <Route path='/movie' element={<MovieCard />} />
      </Routes>
    </div>
  );
}

export default App;
