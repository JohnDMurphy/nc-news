import { getComments } from '../utils/api';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import moment from 'moment';

export const Comments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then((commentsData) => {
      setComments(commentsData);
    });
  }, []);

  return (
    <>
      <h2>Comments</h2>
      <Link to={`/articles/${article_id}`}>
        <h5 className='back-btn'>Back to Article</h5>
      </Link>
      <ul className='article-list'>
        {comments.map((comment) => {
          return (
            <li
              key={`comment-${comment.comment_id}`}
              className='single-article'
            >
              <h5>{comment.author}</h5>
              <p>{comment.body}</p>
              <span className='article-footer'>
                <p className='author-text'>
                  <small>
                    <br />
                    {moment(comment.created_at).format('DD-MM-YYYY')}
                  </small>
                </p>
                <p className='like-button'>👍 {comment.votes}</p>
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
};
