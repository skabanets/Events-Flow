import { NavLink } from 'react-router-dom';

export const Header = () => {
  const navLink = 'font-nunito-medium text-lg text-gray-600 hover:text-gray-800 py-[6px] px-[12px]';

  return (
    <div className="navbar bg-gray-100 shadow-md">
      <div className="flex-1">
        <a className="font-nunito-semibold text-2xl text-blue-600 hover:text-blue-800 cursor-pointer">
          Events-Flow
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-[4px]">
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
  );
};
