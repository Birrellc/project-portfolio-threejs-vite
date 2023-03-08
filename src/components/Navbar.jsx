import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            // scroll to top of page
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo image' className='w-8 h-8 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex uppercase'>
            Chris
            <span className='sm:block hidden'> | Developer</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              // set active to white and none active to grey
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white cursor-pointer font-medium text-[18px]`}
              // callback funtction to set active to the title of the link
              onClick={() => setActive(link.title)}
            >
              {/* render navlinks on the page */}
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            // if open show close - if not open show menu
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradiant absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  // set active to white and none active to grey
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px] `}
                  // callback funtction to set active to the title of the link
                  onClick={() => {
                    // close when click link
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  {/* render navlinks on the page */}
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
