import React from 'react';

const Card = (title, description, swapRate, Cap, Access) => {
  return(
    <div className="card">
        <div className='card_img-container'>
            <img src="https://app.rocketpad.community/images/PLSPAD.jpg" alt="" />
        </div>
        <div className='card_info-container'>
            <h2>{title}</h2>
            <button>ig</button>
            <button>fc</button>
            <button>lnkdn</button>
            <button>codepen</button>
        </div>
    </div>

    ) 
};

export default Card;
