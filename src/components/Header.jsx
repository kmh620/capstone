import React from 'react';
import { Link } from 'react-router-dom';



function Header(){
  return (
    <div>
      
      <Link to="/">Home</Link> | <Link to="/userpage">User</Link>  | <Link to="/other-projects">Other</Link>  | <Link to="/painting-projects">Paint</Link>  | <Link to="/sculpture-projects">sculpture</Link>  | <Link to="/other-form">Other Form</Link>  | <Link to="/paint-form">Paint Form</Link>  | <Link to="/sculpture-form">Sculpture Form</Link> 
    </div>
  );
}

export default Header;