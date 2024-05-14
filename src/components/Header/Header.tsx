import { NavLink } from 'react-router-dom';
import { Logo } from '../../components';

export const Header = () => {
  const navLink = 'font-nunito-medium text-lg text-gray-600 hover:text-gray-800';

  return (
    <header className="shadow-md bg-white">
      <div className="navbar container">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex-none">
          <ul className="flex gap-[15px]">
            <li>
              <NavLink to="/" className={navLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/events-board" className={navLink}>
                Events
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
