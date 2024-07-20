import React from 'react';
import style from './Languagesection.module.scss';
import javaScript from '/js.svg';
import react from '/React.svg';
import Angular from '/Angular.svg';
import vue from '/vue.svg';

const LanguageSection = ({ islight }) => {
  return (
    <section
      className={`${style.section_1} ${islight ? style['lightMode'] : ''}`}
    >
      <div className={style.section_1_container}>
        <div className={style.section_1_content}>
          <nav className={style.LanguageNav}>
            <ul>
              <li className={islight ? style['lightMode'] : ''}>
                <img
                  src={javaScript}
                  alt='javaScript'
                  className={islight ? style['lightMode'] : ''}
                />
                <a href='#'>Java Script</a>
              </li>
              <li className={islight ? style['lightMode'] : ''}>
                <img
                  src={react}
                  alt='react'
                  className={islight ? style['lightMode'] : ''}
                />
                <a href='#'>React</a>
              </li>
              <li className={islight ? style['lightMode'] : ''}>
                <img
                  src={Angular}
                  alt='Angular'
                  className={islight ? style['lightMode'] : ''}
                />
                <a href='#'>Angular js</a>
              </li>
              <li className={islight ? style['lightMode'] : ''}>
                <img
                  src={vue}
                  alt='vue'
                  className={islight ? style['lightMode'] : ''}
                />
                <a href='#'>vue js</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default LanguageSection;
