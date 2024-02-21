import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { SlBag } from 'react-icons/sl';
import { IoSearch } from 'react-icons/io5';
import { useContext, useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react';
import PropTypes from 'prop-types';
import { MdLightMode, MdOutlineLightMode } from 'react-icons/md';

import './Active.css';
import { authContext } from '../../../provider/AuthProvider';

const Menu = () => {
  const { user, logOut, mode, handleMode } = useContext(authContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(error => console.log(error));
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {user?.email ? (
        <li>
          <button onClick={handleLogOut}>Log out</button>
        </li>
      ) : (
        <li>
          <NavLink to="/login">Log in</NavLink>
        </li>
      )}
    </>
  );
  const [isOpen, setOpen] = useState(true);
  const handleToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div
      className={`px-3 md:px-20 ${
        mode ? 'bg-mode-dark text-mode-light' : 'bg-mode-light text-mode-dark'
      }`}
    >
      <nav className={`flex justify-between items-center py-4`}>
        <div className="flex items-center gap-x-4">
          <div className="lg:hidden">
            <button onClick={handleToggle}>
              <Hamburger color="#4FD1C5" />
            </button>
          </div>
          <img src={logo} className="w-1/2 lg:w-full hidden md:block" alt="" />
        </div>

        <ul className="hidden lg:flex gap-x-7 text-xl">{links}</ul>
        <div className="flex gap-x-4 items-center">
          <NavLink to="/booking">
            <SlBag className="text-xl font-medium"></SlBag>
          </NavLink>

          <IoSearch className="text-2xl cursor-pointer"></IoSearch>
          <button onClick={handleMode}>
            {mode ? (
              <MdLightMode className="text-2xl font-medium"></MdLightMode>
            ) : (
              <MdOutlineLightMode className="text-2xl font-medium"></MdOutlineLightMode>
            )}
          </button>

          <button className="btn btn-outline text-orange-600 font-medium hover:bg-red-400">
            Appointment
          </button>
        </div>

        {/* mobile menu */}
        <ul
          className={`bg-base-300 transition-all lg:hidden px-6 py-3 gap-x-7 text-xl rounded-md shadow-lg absolute  w-full text-center top-20 border z-50 ${
            isOpen && '-left-full'
          } ${isOpen || '-left-0'}`}
        >
          {links}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
Menu.propTypes = {
  mode: PropTypes.bool,
  handleMode: PropTypes.func,
};
