import { useState, useEffect } from 'react';
import { getNewsArticles } from '../utils/api';
import { Article } from './Article';

export const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getNewsArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);

  return (
    <>
      <ul className='article-list'>
        <Article data={articles} />
      </ul>
    </>
  );
};
