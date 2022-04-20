import { NavLink } from 'react-router-dom';

// update dynamically in future

export const Nav = () => {
  return (
    <>
      <nav>
        <p>
          <NavLink activeclassname='active' to='/'>
            All
          </NavLink>
        </p>
        <p>
          <NavLink activeclassname='active' to='/topics/coding'>
            Coding
          </NavLink>
        </p>
        <p>
          <NavLink activeclassname='active' to='/topics/football'>
            Football
          </NavLink>
        </p>
        <p>
          <NavLink activeclassname='active' to='/topics/cooking'>
            Cooking
          </NavLink>
        </p>
      </nav>
    </>
  );
};
