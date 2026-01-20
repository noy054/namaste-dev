import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from 'react-router-dom'

const Header = () => {
  const [btnName, setBtnName] = useState('Login')

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/contact'>Contact Us</Link>
          <Link to='/cart'>Cart</Link>
          <button className="login" onClick={() => setBtnName('Logout')}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
