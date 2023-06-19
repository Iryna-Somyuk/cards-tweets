import { NavLink } from 'react-router-dom';

export const AppBar = () => {
  return (
    <>
      <nav className="flex space-x-8">
        <NavLink
          className="curcor-pointer uppercase text-gray-dark text-lg font-bold  hover:text-purple transition-colors duration-300 hover:underline hover:underline-offset-8 active:text-purple focus:underline-offset-8 focus:text-purple"
          to="/"
        >
          home
        </NavLink>
        <NavLink
          className="curcor-pointer uppercase text-gray-dark text-lg font-bold  hover:text-purple transition-colors duration-300  hover:underline hover:underline-offset-8 focus:underline-offset-8 focus:text-purple"
          to="/tweets"
        >
          tweets
        </NavLink>
      </nav>
    </>
  );
};
