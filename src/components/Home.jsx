import { useState, useEffect } from 'react';
import { getNewsArticles } from '../utils/api';

export const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getNewsArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);

  return (
    <div className='login-page'>
      <ul className='article-list'>
        {articles.map((data) => {
          // Refactor to single reusable component
          return (
            <li key={data.article_id} className='single-article'>
              <h3>{data.title}</h3>
              <p>{data.body}</p>
              <p className='author-text'>
                <small>
                  By <br />
                  {data.author}
                </small>
              </p>
              <span className='article-footer'>
                <i className='view-comment-button'>
                  View {data.comment_count} Comments{' '}
                </i>
                <p className='like-button'>👍{data.votes}</p>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
