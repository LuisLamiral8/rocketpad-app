import React from 'react';

const Modal = () => {
  return (
  <div className="modal-component">
        <input type="checkbox" id="btn-modal"/>
        <div className="modal">
            <div className="modal-container">
                <label className="close-btn"htmlFor="btn-modal">X</label>
                <div className="content">
                    <div className="modal-info">
                    <h3>Connect your Wallet</h3>
                    <img width="200px" height="33px" src="https://app.rocketpad.community/images/logo/logo-white1.png" alt="" />
                    </div>
                    <div className="connect-btns">
                        <button><div>
                            <p>Yoroi</p>
                            <img width="30px" height="30px" src="https://app.rocketpad.community/images/wallet/yoroi.jpeg" alt="" />
                            </div></button>
                        <button><div>
                            <p>Deadalus</p>
                            <img width="30px" height="30px" src="https://app.rocketpad.community/images/wallet/deadalus.png" alt="" />
                            </div></button>
                        <button><div>
                            <p>Nami</p>
                            <img width="30px" height="30px" src="https://app.rocketpad.community/images/wallet/nami.jpeg" alt="" />
                            </div></button>
                    </div>
                </div>
            </div>
        </div>
  </div>
  )
};

export default Modal;
