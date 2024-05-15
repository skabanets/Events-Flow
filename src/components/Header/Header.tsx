import { NavLink } from 'react-router-dom';

import { Logo } from '../../components';

export const Header = () => {
  return (
    <header className="shadow-md bg-white">
      <div className="navbar container">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex-none">
          <ul className="flex gap-[15px]">
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/events-board" className="nav-link">
                Events
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
