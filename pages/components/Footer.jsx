import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faTelegram, faMedium   } from '@fortawesome/free-brands-svg-icons'
import {faGlobe} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return(
      <footer className="footer">
            <div className="footer-img_container">
                <img width="180px" height="116px" src="https://app.rocketpad.community/images/logo/rocketpad-logo2.png" alt="" />
            </div>
            <p>🚀 Rocketpad is a Cardano-based fundraising platform and a project accelerator, designed to leverage DeFi innovations to provide transparent, efficient, and fully decentralized crowdfunding services. Unlike our competitors, we offer full support of Cardano native tokens and a suite of advanced DeFi tools that upcoming projects need to thrive and prosper.</p>
            <div className="footer-social_media">
                <button><FontAwesomeIcon className="footer-img" icon={faFacebookF}/> </button>
                <button><FontAwesomeIcon className="footer-img" icon={faTwitter}/>  </button>
                <button><FontAwesomeIcon className="footer-img" icon={faGlobe}/> </button>
                <button><FontAwesomeIcon className="footer-img" icon={faMedium}/> </button>
                <button><FontAwesomeIcon className="footer-img" icon={faTelegram}/> </button>
            </div>
            <div className="footer-copyright">
                <a href="#">© Copyright Rocketpad. All Rights Reserved</a>
            </div>
      </footer>
      )
};

export default Footer;