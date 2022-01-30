import React from 'react';

const Tiercard = ({image, tier, name, minimum, maximum}) => {
  return (
    <div className="tier-card_main_container">
        <div className="card-img_container">
        <img src={image} alt="" width="55px" height="100px" />
        </div>
        <div className="card-info_container">
        <h3>Tier {tier}</h3>
        <h4>{name}</h4>
        <p><b>Minimum Stake :</b> {minimum} $Rocket</p>
        <p><b>Maximum Stake :</b> {maximum} $Rocket</p>
        </div>
    </div>
  )
};
export default Tiercard;