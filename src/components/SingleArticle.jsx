import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getArticleById } from '../utils/api';

export const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((articleData) => {
      setArticle(articleData);
    });
  }, []);

  return (
    <>
      <div className='single-article'>
        <h3 className='article-header'>{article.title}</h3>

        <p>{article.body}</p>
        <p className='author-text'>
          <small>
            By <br />
            {article.author}
          </small>
        </p>
        <Link to={`/`}>
          <h6 className='article-header back-btn'>Home Page</h6>
        </Link>
        <span className='article-footer'>
          <i className='view-comment-button'>View {article.comment_count}</i>

          <p className='like-button'>👍 {article.votes}</p>
        </span>
      </div>
    </>
  );
};
