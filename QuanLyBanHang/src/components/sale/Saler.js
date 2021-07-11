import React from 'react';
import SalerContent from './SalerContent';
import SalerHeader from "./SalerHeader"

const Saler = () => {
  return (
    <div>
      <div className = "header">
          <SalerHeader />
      </div>
      <div className = "body">
        <SalerContent />
      </div>
    </div>
  );
}

export default Saler;
