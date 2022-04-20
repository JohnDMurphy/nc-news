import { useState, useEffect } from 'react';
import { getCodingArticles } from '../utils/api';
import { Article } from './Article';

export const Coding = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getCodingArticles().then((articlesFromApi) => {
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
