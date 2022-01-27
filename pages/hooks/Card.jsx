import React from 'react';

const Card = ({ title, description, swapRate, cap, access, participants }) => {
    return (
        <div className="card">
            <div className="card_top-container">
                <div className='card_img-container'>
                    <img src="https://app.rocketpad.community/images/PLSPAD.jpg" alt="" width="55px" height="55px" />
                </div>

                <div className='card_info-container'>
                    <h2>{title}</h2>
                    <div className="social-media">
                        {/* <button><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Instagram_font_awesome.svg/1024px-Instagram_font_awesome.svg.png" alt="" width="14px" height="14px"/></button> */}
                        <a><img src='/instagram.svg' alt="" width="13.5px" height="15px"/></a>
                        <a><img src="/twitter.svg" alt="" width="13.5px" height="15px"/></a>
                        <a><img src="/linkedin.svg" alt="" width="13.5px" height="15px"/></a>
                        <a><img src="/codepen.svg" alt="" width="13.5px" height="15px"/></a>
                    </div>
                    <div className="open-with">
                    <a href="#"> <b className="item-open">⚬</b> Opens in TDA</a>
                    <a href="#">ADA</a>
                    </div>
                </div>
            </div>
            <p className="card-description">{description}</p>
            <div className="card-swapInfo">
                <ul>
                    <small class="swapInfo-small">Swap Rate <br /> <span className="swapInfo-data">{swapRate}</span></small>
                    <small class="swapInfo-small">Cap <br /> <span className="swapInfo-data">{cap}</span>/</small>
                    <small class="swapInfo-small">Access <br /> <span className="swapInfo-data">{access} </span></small>
                </ul>
            </div>
            <div className="card-status">
                <div>
                <small>Progress</small>
                <p>Participants:  <b>{participants}</b></p>
                </div>

                <div className="pp-card-progress">
                    <div className="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>


        </div>

    )
};

export default Card;
