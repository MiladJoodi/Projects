import React from "react";
import "./Feature.css";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
export default function Feature() {
  return (
    <div className="features">
      {/* feature item 1 */}
      <div className="featureItem">
        <div className="featureItemContainer">
          <span className="featureTitle">فروش امروز</span>
          <div className="featureContainer">
            <span className="featureMoney persianNumber">35,415 تومان</span>
            <span className="featureRate persianNumber">
              5%+
              <ArrowUpwardOutlinedIcon className="featureIcon" />
            </span>
          </div>
        </div>
        <span className="featureSub">نسب به ماه گذشته</span>
      </div>
      {/* feature item 1 */}
      <div className="featureItem">
        <div className="featureItemContainer">
          <span className="featureTitle">سود</span>
          <div className="featureContainer">
            <span className="featureMoney persianNumber">92,415 تومان</span>
            <span className="featureRate persianNumber">
            21%-
              <ArrowDownwardOutlinedIcon className="featureIcon negative" />
            </span>
          </div>
        </div>
        <span className="featureSub">نسب به ماه گذشته</span>
      </div>
      {/* feature item 1 */}
      <div className="featureItem">
        <div className="featureItemContainer">
          <span className="featureTitle">جمع سود این ماه</span>
          <div className="featureContainer">
            <span className="featureMoney persianNumber">772,415 تومان</span>
            <span className="featureRate persianNumber">
            17%+
              <ArrowUpwardOutlinedIcon className="featureIcon" />
            </span>
          </div>
        </div>
        <span className="featureSub">نسب به ماه گذشته</span>
      </div>
    </div>
  );
}
