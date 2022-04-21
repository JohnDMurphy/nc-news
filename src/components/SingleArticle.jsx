import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getArticleById, updateVotes, downVotes } from '../utils/api';

export const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [upVote, setUpVote] = useState(0);
  const { article_id } = useParams();

  function upDoot() {
    if (upVote < 1) {
      setUpVote((curVote) => {
        return ++curVote;
      });
      updateVotes(article_id);
    } else {
      setUpVote((curVote) => {
        return --curVote;
      });
      downVotes(article_id);
    }
  }

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

          <p className='like-button' onClick={upDoot}>
            👍 {article.votes + upVote}
          </p>
        </span>
      </div>
    </>
  );
};
