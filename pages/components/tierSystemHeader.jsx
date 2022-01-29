import React from 'react';
import Tiers from '../hooks/Tiers'

const tierSystemHeader = () => {
  return (
      <section>
          <div className="tiers-container">
              <Tiers/>
              <Tiers/>
              <Tiers/>
              <Tiers/>
              <Tiers/>
          </div>
      </section>
  )
};

export default tierSystemHeader;
