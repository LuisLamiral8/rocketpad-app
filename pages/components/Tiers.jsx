import React from 'react';
import Tiercard from '../hooks/Tiercard.jsx'
const Tiers = () => {
  return (
    <section class="tiersystem-main_container">
        <article className="tiers-container">
            <Tiercard
            image="/knight.png"
            tier="1"
            name="KNIGHT"
            minimum="500"
            maximum="5,000"
            />
            <Tiercard
            image="/bishop.png"
            tier="2"
            name="BISHOP"
            minimum="5,000"
            maximum="50,000"
            />
            <Tiercard
            image="/rook.png"
            tier="3"
            name="ROOK"
            minimum="50,000"
            maximum="250,000"
            />
            <Tiercard
            image="/queen.png"
            tier="4"
            name="QUEEN"
            minimum="250,000"
            maximum="1,250,000"
            />
            <Tiercard
            image="/king.png"
            tier="5"
            name="KING"
            minimum="1,250,000"
            maximum="6,250,000"
            />
        </article>
        <article className="advise">
            <p>Users need to Buy and Stake atleast the minimum amount designated for their desired Allocation Tier before the IDO Snapshot is taken.</p>
        </article>
        <article className="participation-model">
            <h3>$Rocket Pool Participation Model</h3>
            <h4>1 X Pool weight</h4>
            <p>To determine your allocation multiply this number against your individual pool weight</p>
            <button>Read more details Here</button>
        </article>
    </section>
  )
};

export default Tiers;
