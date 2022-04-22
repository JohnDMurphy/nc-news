import { getComments, getNewsArticles, postComment } from '../utils/api';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import moment from 'moment';

export const Comments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState([]);

  useEffect(() => {
    getComments(article_id).then((commentsData) => {
      setComments(commentsData);
    });
  }, []);

  const updateComments = async (e) => {
    e.preventDefault();
    const infoObj = {
      body: e.target[1].value,
      username: e.target[0].value,
    };

    postComment(article_id, infoObj).then((newCommentInfo) => {
      console.log('In jsx -> ', newCommentInfo);
      setNewComment((curArr) => {
        return [...curArr, newCommentInfo];
      });
      e.target[0].value = '';
      e.target[1].value = '';
    });
  };

  return (
    <>
      <h2>Comments</h2>
      <Link to={`/articles/${article_id}`}>
        <h5 className='back-btn'>Back to Article</h5>
      </Link>
      <form
        action='#'
        onSubmit={updateComments}
        id='comment-form'
        className='single-article'
      >
        <h3>Post a comment</h3>
        <input
          id='comment-user'
          name='form-username'
          type='text'
          placeholder='Username'
          required
        />
        <textarea
          form='comment-form'
          name='new-comment'
          id='new-comment'
          rows='5'
          placeholder='Comment Here...'
          required
        ></textarea>
        <button id='post-btn'>Post</button>
      </form>
      <small id='submit-message'></small>
      <ul className='article-list'>
        {newComment?.map((comment) => {
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
