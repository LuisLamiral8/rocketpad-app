import React from 'react';
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faLinkedinIn, faCodepen  } from '@fortawesome/free-brands-svg-icons'
const Card = ({ title, to, description, swapRate, cap, access, participants }) => {
    return (
        <div className="card">
            <div className="card_top-container">
                <div className='card_img-container'>
                    <div className="icon-box">
                        <span>
                           <img className="card_img-logo" src="https://app.rocketpad.community/images/PLSPAD.jpg" alt="" width="55px" height="55px" />
                        </span>
                    </div>
                </div>

                <div className='card_info-container'>
                    <a className="card-title" href={to}>{title}</a>
                    <div className="social-media">
                        {/* <button><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Instagram_font_awesome.svg/1024px-Instagram_font_awesome.svg.png" alt="" width="14px" height="14px"/></button> */}
                        <a className="socialMedia-btn"><FontAwesomeIcon className="img" icon={faInstagram}/></a>
                        <a className="socialMedia-btn"><FontAwesomeIcon className="img" icon={faTwitter}/></a>
                        <a className="socialMedia-btn"><FontAwesomeIcon className="img" icon={faLinkedinIn}/></a>
                        <a className="socialMedia-btn"><FontAwesomeIcon className="img" icon={faCodepen}/></a>
                    </div>
                    <div className="open-with">
                    <p href="#"> <b className="item-open">⚬</b> Opens in TDA</p>
                    <p href="#">ADA</p>
                    </div>
                </div>
            </div>
            <p className="card-description">{description}</p>
            <div className="card-swapInfo">
                <ul>
                    <small className="swapInfo-small">Swap Rate <br /> <span className="swapInfo-data">{swapRate}</span></small>
                    <small className="swapInfo-small">Cap <br /> <span className="swapInfo-data">{cap}</span>/</small>
                    <small className="swapInfo-small">Access <br /> <span className="swapInfo-data">{access} </span></small>
                </ul>
            </div>
            <div className="card-status">
                <div>
                <small>Progress</small>
                <p>Participants:  <b>{participants}</b></p>
                </div>

                <div className="pp-card-progress">
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>


        </div>

    )
};
export default Card;
