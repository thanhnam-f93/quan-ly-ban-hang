import React from "react";
import FirstContent from "./FirstContent";
import "./scss/SalerContent.scss";
const SalerContent = () => {
  return (
    <div className="wrap-content">
      <div className="content-right">
       <FirstContent />
      </div>
      <div className="content-left"></div>
    </div>
  );
};
export default SalerContent;
