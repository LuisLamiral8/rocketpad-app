import React from 'react';
import Link from 'next/link'
// const ham= document.querySelector(".ham");

const Navbar = () => {
  if (typeof window !== 'undefined') {
    const ul = document.querySelector(".ul");
    const bars = document.querySelectorAll(".ham span")

    const responsiveNav = () => {
      // ul.classList.toggle("navActive");
      // bars.forEach(child => { child.classList.toggle('animated') });

      if(ul.classList.contains("navActive")){
        ul.classList.remove("navActive");
      }else{
        ul.classList.add("navActive");
      }
    }


  }
  return (
    <nav className="navbar">
      <img src="https://app.rocketpad.community/images/logo/logo-white1.png" alt="" height="35px" />
      <ul class="ul">
        <li><Link href="https://rocketpad.community/">Home</Link></li>
        <li><label for="btn-modal" class="lbl-modal">Connect Wallet</label></li>
        <li><Link href="/">Projects</Link></li>
        <li for="staking"><Link id="staking" href="/staking">Staking</Link></li>
        <li for="tier"><Link id="tier" href="/tier-system" >Tier system</Link></li>
      </ul>
      <button onClick={() => responsiveNav()} className="ham" type="button">
        <span className="br-1"></span>
        <span className="br-2"></span>
        <span className="br-3"></span>
      </button>
    </nav>
  );
}

export default Navbar;
