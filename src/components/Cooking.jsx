import { useState, useEffect } from 'react';
import { getCookingArticles } from '../utils/api';
import { Article } from './Article';

export const Cooking = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getCookingArticles().then((articlesFromApi) => {
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
