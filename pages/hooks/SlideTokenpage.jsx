import React, { useState } from 'react';

const SlideTokenpage = () => {
  const [toggledState, setToggledState] = useState(1);
  const toggledTab = (index2) => {
    setToggledState(index2);
  }
  return (
    <section>
      <div className="tabs-btns">
        <button onClick={() => toggledTab(1)} className={toggledState === 1 ? "tab-btn active_btn-tab" : "tab-btn"}>Project details</button>
        <button onClick={() => toggledTab(2)} className={toggledState === 2 ? "tab-btn active_btn-tab" : "tab-btn"}>Schedule</button>
        <button onClick={() => toggledTab(3)} className={toggledState === 3 ? "tab-btn active_btn-tab" : "tab-btn"}>Your Allocation</button>
      </div>
      <div className="tabs">
        <div className={toggledState === 1 ? "project-details-container tab-active" : "project-details-container"}>
          <div className="pool-info-container">
            <p className="pool-token_name">POOL INFORMATION</p>
            <div className="secure25">
              <p>Secure 25</p>
              <p>Coming Soon</p>
            </div>
            <div className="portable-fire">
              <p>Portable Fire</p>
              <p>Coming Soon</p>
            </div>
          </div>
          <div className="token-info-container">
            <p className="pool-token_name">TOKEN INFORMATION</p>
            <div className="secure25">
              <p>Secure 25</p>
              <p>Coming Soon</p>
            </div>
            <div className="portable-fire">
              <p>Portable Fire</p>
              <p>Coming Soon</p>
            </div>
          </div>
        </div>
        <div className={toggledState === 2 ? "schedule-container tab-active" : "schedule-container"}>
          <div className="schedule-comingSoon">
            <p>Coming Soon</p>
          </div>
        </div>
        <div className={toggledState === 3 ? "allocation-container tab-active" : "allocation-container"}>
            <div className="allocation-date-container">
              <p>No.</p>
              <p>Allocation</p>
              <p>Date</p>
              <p>Claimed</p>
            </div>
            <button className="addMetamask-btn"><div className="addMetamask-div">
              <img width="14px" height="14px" src="/plus.svg" alt="" />
              <p>Add token to <b>MetaMask</b></p>
              </div></button>
        </div>
      </div>
    </section>

  )
};

export default SlideTokenpage;

