import React, { useState } from 'react';

const Staking = ({staked, unstaked, reward}) => {
    const[toggleState, setToggleState]= useState(1);
      const toggleTab = (index) =>{
        setToggleState(index);
      }
  return (
      <article>
        <section className="stakeUnstake-btns">
                <button onClick={() => toggleTab(1)} className={toggleState === 1 ? "stake-btn active-tabs" : "stake-btn"}>STAKING</button>
                <button onClick={() => toggleTab(2)} className={toggleState === 2 ? "unstake-btn active-tabs" : "unstake-btn"}>UNSTAKE</button>
        </section>
        <article>
            
            <div className={toggleState === 1 ? "staking-container active-content" : "staking-container"}>
                <div className="to-stake">
                    <h3>To stake</h3>
                    <li><img src="/arrowdouble.svg" width="13px" height="13px" alt="" /> Connect your wallet</li>
                    <li><img src="/arrowdouble.svg" width="13px" height="13px" alt="" /> You must have sufficient funds ($Rocket )</li>
                    <li><img src="/arrowdouble.svg" width="13px" height="13px" alt="" /> You must have ADA</li>
                    <li><img src="/arrowdouble.svg" width="13px" height="13px" alt="" /> You cannot stake if you have an active unstake and withdraw request</li>
                </div>
                <div className="staked-info">
                <div className="staked">
                    <p>Staked</p>
                    <span>{staked}</span>
                </div>
                <div className="unstaked">
                    <p>Unstaked</p>
                    <span>{unstaked}</span>
                </div>
                <div className="rewards">
                    <p>Rewards</p>
                    <span>{reward}</span>
                    <div className='rewards-button'>
                        <button>Stake</button>
                        <button>Withdraw</button>
                    </div>
                </div>
                </div>
            </div>
            <div className={toggleState === 2 ? "unstake-container active-content" : "staking-container"}>
                <div className="unstake-alert">
                    <div className="unstake-alert_container">
                        <img width="75px" height="55px" src="/trianglealert.svg" alt="" />
                        <h5>If you unstake you will wait 5 days before you can withdraw your $rocket and rewards</h5>
                    </div>
                </div>
            </div>
        </article>
      </article>
      )
};

export default Staking;