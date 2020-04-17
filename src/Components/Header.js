import React from 'react';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <header className="Header">
      <Link to="/" className="link ncnews">
        <h1>
          <div className="red">N</div>C-NEWS
        </h1>
      </Link>

      <img
        src="https://getdrawings.com/free-icon/profile-icon-png-62.png"
        alt="user"
        className="userIcon"
      />
      <p className="user__header">user:</p>
      <p className="userName">jessjelly</p>
    </header>
  );
};

export default Header;
