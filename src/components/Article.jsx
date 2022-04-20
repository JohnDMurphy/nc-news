export const Article = ({ data }) => {
  return (
    <>
      {data.map((articleData) => {
        return (
          <li key={articleData.article_id} className='single-article'>
            <h3 className='article-header'>{articleData.title}</h3>
            <p>{articleData.body}</p>
            <p className='author-text'>
              <small>
                By <br />
                {articleData.author}
              </small>
            </p>
            <span className='article-footer'>
              <i className='view-comment-button'>
                View {articleData.comment_count} Comments{' '}
              </i>

              <p className='like-button'>👍 {articleData.votes}</p>
            </span>
          </li>
        );
      })}
    </>
  );
};
