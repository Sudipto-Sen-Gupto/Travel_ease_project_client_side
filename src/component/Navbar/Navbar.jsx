import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import './nav.css';
import { AuthContext } from '../authprovider/Authprovider';
import profile from '../../assets/user.png';
import { toast } from 'react-toastify';
import Logo from '../logo/Logo';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const { user, signout } = use(AuthContext);
  const [open, setOpen] = useState(false);

  const handleSignOut = () => {
    signout()
      .then(() => toast.success('Log out successful'))
      .catch(err => console.log(err));
  };

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const html = document.querySelector('html');
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggle = checked => {
    setTheme(checked ? 'dark' : 'light');
  };

  const NavItem = ({ to, label }) => (
    <NavLink
      to={to}
      className="relative font-medium text-base px-2 py-1 group"
    >
      {label}
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
    </NavLink>
  );

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 backdrop-blur-md bg-base-100/80 shadow-lg"
    >
      <div className="navbar max-w-8xl p-5 mx-auto px-4">
        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden">
              ☰
            </div>
            <ul className="menu dropdown-content bg-base-100 rounded-box mt-3 w-52 p-4 shadow-xl">
              <NavItem to="/" label="Home" />
              <NavItem to="/allvehicles" label="All Vehicles" />
              <NavItem to="/addvehicles" label="Add Vehicles" />
              <NavItem to="/myvehicles" label="My Vehicles" />
              <NavItem to="/mybook" label="My Bookings" />
            </ul>
          </div>
          <Logo />
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex gap-6">
          <NavItem to="/" label="Home" />
          <NavItem to="/allvehicles" label="All Vehicles" />
          <NavItem to="/addvehicles" label="Add Vehicles" />
          <NavItem to="/myvehicles" label="My Vehicles" />
          <NavItem to="/mybook" label="My Bookings" />
        </div>

        {/* Right */}
        <div className="navbar-end gap-4 relative">
          {user ? (
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <img
                  src={user.photoURL || profile}
                  className="w-11 h-11 rounded-full ring-2 ring-orange-500"
                  alt="profile"
                />
                <motion.span
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown />
                </motion.span>
              </motion.div>

              {/* Dropdown */}
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    className="absolute right-0 mt-4 w-56 bg-base-100 rounded-xl shadow-xl p-4 space-y-3"
                  >
                    <p className="text-sm font-semibold">
                      {user.displayName}
                    </p>

                    <button
                      onClick={handleSignOut}
                      className="btn btn-sm btn-outline w-full"
                    >
                      Log Out
                    </button>

                    <div className="flex items-center justify-between">
                      <span className="text-sm">Dark Mode</span>
                      <input
                        type="checkbox"
                        onChange={e => handleToggle(e.target.checked)}
                        defaultChecked={theme === 'dark'}
                        className="toggle toggle-sm bg-orange-500"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline">
                Log In
              </Link>
              <Link to="/register" className="btn btn-primary">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
