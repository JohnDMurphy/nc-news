import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getNewsArticles } from '../utils/api';

import { Article } from './Article';

export const Home = () => {
  const [articles, setArticles] = useState([]);

  const { holder } = useParams();

  useEffect(() => {
    getNewsArticles(holder).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, [holder]);

  return (
    <>
      <ul className='article-list'>
        <Article data={articles} />
      </ul>
    </>
  );
};
