import React from 'react';
import Link from 'next/link'
const Navbar = () => {
  return(
    <nav className="navbar">
        <img src="https://app.rocketpad.community/images/logo/logo-white1.png" alt="" height="35px"/>
        <ul>
            <li><Link href="https://rocketpad.community/">Home</Link></li>
            <li><label for="btn-modal" class="lbl-modal">Connect Wallet</label></li>
            <li><Link href="/">Projects</Link></li>
            <li><Link href="/staking">Staking</Link></li>
            <li><Link href="/tier-system" >Tier system</Link></li>
       </ul>
    </nav>
      ) 
};

export default Navbar;
