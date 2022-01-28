import React from 'react';

const Staking = ({staked, unstaked, reward}) => {
  return (
      <article>
          <div className="staking-container">
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
          <div className="unstake-container">
              <div className="unstake-alert">
                    <p>If you unstake you will wait 5 days before you can withdraw your $rocket and rewards</p>
              </div>
          </div>
      </article>
      )
};

export default Staking;