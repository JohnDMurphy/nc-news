import { useState, useEffect } from 'react';
import { getNewsArticles } from '../utils/api';

export const Home = () => {
  getNewsArticles();

  return (
    <div className='login-page'>
      <h1>Home</h1>
    </div>
  );
};
