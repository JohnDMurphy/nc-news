import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Nav } from './components/Nav';
import { Comments } from './components/Comments';
import { SingleArticle } from './components/SingleArticle';
import Image from './utils/images/fake-news.png';

// import { useState } from 'react';

function App() {
  return (
    <div className='App'>
      <Nav />
      <div className='header'>
        <h1>Fake News</h1>
        <img className='fn-img' src={Image} alt='news logo' />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/topics/:holder' element={<Home />} />
        <Route path='/articles/:article_id/comments' element={<Comments />} />
        <Route path='/articles/:article_id' element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;
