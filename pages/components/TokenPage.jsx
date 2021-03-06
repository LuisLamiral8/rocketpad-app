import React from 'react';
import SlideTokenpage from '../hooks/SlideTokenpage'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faLinkedinIn, faCodepen  } from '@fortawesome/free-brands-svg-icons'
const TokenPage = ({name}) => {
    return (
        <article>
            <div className="tokenpage-header">
                <div className="ptoken-info">
                    <div className="ptoken-container">
                        
                    <div className='ptoken_img-container'>
                        <div className="ptoken_icon-box">
                            <span>
                            <img className="ptoken_img-logo" src="https://app.rocketpad.community/images/PLSPAD.jpg" alt="" width="55px" height="55px" />
                            </span>
                        </div>
                    </div>
                    <div className="ptoken_token-info">
                        <p className="card-title ptoken-title">{name}</p>
                        <div className="ptoken_social-media">
                            <a className="ptoken_socialMedia-btn"><FontAwesomeIcon className="tokenpage-img" icon={faInstagram}/></a>
                            <a className="ptoken_socialMedia-btn"><FontAwesomeIcon className="tokenpage-img" icon={faTwitter}/></a>
                            <a className="ptoken_socialMedia-btn"><FontAwesomeIcon className="tokenpage-img" icon={faLinkedinIn}/></a>
                            <a className="ptoken_socialMedia-btn"><FontAwesomeIcon className="tokenpage-img" icon={faCodepen}/></a>
                        </div>
                        <div className="ptoken_open-with">
                            <p href="#"> <b className="item-open">⚬</b> Opens in TDA</p>
                            <p href="#">ADA</p>
                        </div>
                    </div>
                    </div>
                    <div className="ptoken_token-btns">
                        <p className="ptoken_desc">Battle Royale Game with NFT Skins</p>
                        <div className="ptoken_btns">
                            <button className="ptoken-btn">Connect Wallet</button>
                            <button className="ptoken-btn">Claim Tokens Instantaneously</button>
                        </div>
                    </div>

                </div>
                <div className="img-container">
                    <img src="/bg1.png" alt="" width="500px" height="325px" />
                </div>
            </div>
            <SlideTokenpage/>
        </article>
    )
};

export default TokenPage;
