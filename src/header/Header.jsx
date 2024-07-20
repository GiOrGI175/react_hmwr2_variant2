import React from 'react';
import style from './Header.module.scss';
import HeaderNav from './Headernav';
import sun from '/sun.svg';
import moon from '/moon.svg';

const Header = ({ islight, setISlight }) => {
  function toogleMode() {
    setISlight((perv) => !perv);
  }

  return (
    <header className={`${style.header} ${islight ? style['lightMode'] : ''}`}>
      <div className={style.header_container}>
        <div className={style.header_content}>
          <HeaderNav islight={islight} />
          <div className={style.ImgBox} onClick={toogleMode}>
            <img src={islight ? moon : sun} alt='light Mode' />
          </div>
        </div>
      </div>
      <div className={style.underline}></div>
    </header>
  );
};

export default Header;
