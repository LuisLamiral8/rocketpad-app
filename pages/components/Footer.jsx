import React from 'react';

const Footer = () => {
  return(
      <footer className="footer">
            <div className="footer-img_container">
                <img width="180px" height="116px" src="https://app.rocketpad.community/images/logo/rocketpad-logo2.png" alt="" />
            </div>
            <p>🚀 Rocketpad is a Cardano-based fundraising platform and a project accelerator, designed to leverage DeFi innovations to provide transparent, efficient, and fully decentralized crowdfunding services. Unlike our competitors, we offer full support of Cardano native tokens and a suite of advanced DeFi tools that upcoming projects need to thrive and prosper.</p>
            <div className="footer-social_media">
                <button><img width="14px" height="14px" src="/facebook.svg" alt=""/></button>
                <button><img width="14px" height="14px" src="/twitter.svg" alt=""/></button>
                <button><img width="14px" height="14px" src="/world.svg" alt=""/></button>
                <button><img width="14px" height="14px" src="/medium.svg" alt=""/></button>
                <button><img width="14px" height="14px" src="/telegram.svg" alt=""/></button>
            </div>
            <div className="footer-copyright">
                <a href="#">© Copyright Rocketpad. All Rights Reserved</a>
            </div>
      </footer>
      )
};

export default Footer;