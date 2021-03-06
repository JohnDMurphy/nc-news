import { Link } from 'react-router-dom';
import moment from 'moment';

export const Article = ({ data }) => {
  return (
    <>
      {data.map((articleData) => {
        return (
          <li
            id={articleData.article_id}
            key={articleData.article_id}
            className='single-article'
          >
            <Link to={`/articles/${articleData.article_id}`}>
              <h3 className='article-header'>{articleData.title}</h3>
            </Link>
            <p>{articleData.body}</p>
            <p className='author-text'>
              <small>
                By <br />
                {articleData.author}
              </small>
            </p>
            <span className='article-footer'>
              <i className='view-comment-button'>
                {moment(articleData.created_at).format('DD-MM-YYYY')}
              </i>

              <p className='like-button'>👍 {articleData.votes}</p>
            </span>
          </li>
        );
      })}
    </>
  );
};
