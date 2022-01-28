import React from 'react';

const Navbar = () => {
  return(
    <nav className="navbar">
        <img src="https://app.rocketpad.community/images/logo/logo-white1.png" alt="" height="35px"/>
        <ul>
            <li><a href="#">Home</a></li>
            <li><label for="btn-modal" class="lbl-modal">Connect Wallet</label></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Staking</a></li>
            <li><a href="#">Tier system</a></li>
        </ul>
    </nav>
      ) 
};

export default Navbar;
