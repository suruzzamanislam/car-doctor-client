import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { SlBag } from 'react-icons/sl';
import { IoSearch } from 'react-icons/io5';
import { IoMenu } from 'react-icons/io5';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { useState } from 'react';
import './Active.css';

const Menu = () => {
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
      <li>
        <NavLink to="/login">Log in</NavLink>
      </li>
    </>
  );
  const [menu, setMenu] = useState(true);
  const handleToggle = () => {
    setMenu(!menu);
  };
  return (
    <nav className="flex justify-between items-center py-4">
      <div className="flex items-center gap-x-4">
        <div className="lg:hidden">
          <button onClick={handleToggle}>
            {menu ? (
              <IoMenu className="text-2xl font-medium"></IoMenu>
            ) : (
              <FaExpandArrowsAlt className="text-xl font-medium text-orange-600"></FaExpandArrowsAlt>
            )}
          </button>
        </div>
        <img src={logo} className="w-1/2 lg:w-full hidden md:block" alt="" />
      </div>

      <ul className="hidden lg:flex gap-x-7 text-xl">{links}</ul>
      <div className="flex gap-x-4 items-center">
        <Link to="/cart">
          <SlBag className="text-xl font-medium"></SlBag>
        </Link>

        <IoSearch className="text-2xl cursor-pointer"></IoSearch>
        <button className="btn btn-outline text-orange-600 font-medium hover:bg-red-400">
          Appointment
        </button>
      </div>

      {/* mobile menu */}
      <ul
        className={`bg-base-300 transition-all lg:hidden px-6 py-3 gap-x-7 text-xl rounded-md shadow-lg absolute  w-full text-center top-20 border z-50 ${
          menu && '-left-full'
        } ${menu || '-left-0'}`}
      >
        {links}
      </ul>
    </nav>
  );
};

export default Menu;
