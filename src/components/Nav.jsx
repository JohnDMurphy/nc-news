import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <>
      <nav>
        <p>
          <Link to='/'>All</Link>
        </p>
        <p>
          <Link to='/Coding'>Coding</Link>
        </p>
        <p>
          <Link to='/Football'>Football</Link>
        </p>
        <p>
          <Link to='/Cooking'>Cooking</Link>
        </p>
      </nav>
    </>
  );
};
