import React, { useState } from 'react';
import style from './HeaderNav.module.scss';

const HeaderNav = ({ islight }) => {
  return (
    <nav className={style.HeaderNav}>
      <ul>
        <li>
          <a href='#' className={islight ? style.lightMode : ''}>
            Home
          </a>
        </li>
        <li>
          <a href='#' className={islight ? style.lightMode : ''}>
            About
          </a>
        </li>
        <li>
          <a href='#' className={islight ? style.lightMode : ''}>
            Services
          </a>
        </li>
        <li>
          <a href='#' className={islight ? style.lightMode : ''}>
            Projects
          </a>
        </li>
        <li>
          <a href='#' className={islight ? style.lightMode : ''}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
