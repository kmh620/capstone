import React from 'react';
import { Link } from 'react-router-dom';



function Header(){

  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/userpage">User</Link> | <Link to="/">Project</Link>  | <Link to="/other-form">New Form</Link>
    </div>
  );
}

export default Header;
