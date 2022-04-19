import { useState, useEffect } from 'react';
import { getNewsArticles } from '../utils/api';
// import { Link } from 'react-router-dom';

export const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getNewsArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);

  console.log(articles);
  return (
    <div className='login-page'>
      <ul className='article-list'>
        {articles.map((data) => {
          return (
            <li key={data.article_id}>
              <h3>{data.title}</h3>
              <p>{data.body}</p>
              <p>
                <small>{data.author}</small>
              </p>
              <p>👍{data.votes}</p>
              <i>View {data.comment_count} Comments </i>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
