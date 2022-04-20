import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Nav } from './components/Nav';

// import { useState } from 'react';

function App() {
  return (
    <div className='App'>
      <Nav />
      <div className='header'>
        <h1>Fake News</h1>
        <img
          className='fn-img'
          src='https://cdn-icons.flaticon.com/png/512/4410/premium/4410134.png?token=exp=1650457197~hmac=4d5ad7a3e05e5160d7986482d43a700e'
          alt='news logo'
        />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/topics/:holder' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
