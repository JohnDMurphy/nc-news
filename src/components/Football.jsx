import { useState, useEffect } from 'react';
import { getFootballArticles } from '../utils/api';
import { Article } from './Article';

export const Football = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getFootballArticles().then((articlesFromApi) => {
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
