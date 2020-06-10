import React from 'react';
import { Link } from '@reach/router';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className="Header">
      <Link to="/" className="link ncnews">
        <h1 className="title">
          <div className="red">N</div>C NEWS
        </h1>
      </Link>
      <NavBar />
      <img
        src="https://getdrawings.com/free-icon/profile-icon-png-62.png"
        alt="user"
        className="userIcon"
      />
    </header>
  );
};

export default Header;
