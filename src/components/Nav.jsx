import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <>
      <nav>
        <p>
          <NavLink activeClassName='active' to='/'>
            All
          </NavLink>
        </p>
        <p>
          <NavLink activeClassName='active' to='/Coding'>
            Coding
          </NavLink>
        </p>
        <p>
          <NavLink activeClassName='active' to='/Football'>
            Football
          </NavLink>
        </p>
        <p>
          <NavLink activeClassName='active' to='/Cooking'>
            Cooking
          </NavLink>
        </p>
      </nav>
    </>
  );
};
