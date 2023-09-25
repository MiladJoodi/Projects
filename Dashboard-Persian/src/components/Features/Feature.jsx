import React from "react";
import "./Feature.css";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
export default function Feature() {
  return (
    <div className="features">
      {/* feature item 1 */}
      <div className="featureItem">
        <span className="featureTitle">درآمد</span>
        <div className="featureContainer">
          <span className="featureMoney">$2,415</span>
          <span className="featureRate">
            $-11.4
            <ArrowDownwardOutlinedIcon className="featureIcon negative" />
          </span>
        </div>
        <span className="featureSub">نسب به ماه گذشته</span>
      </div>
      {/* feature item 1 */}
      <div className="featureItem">
        <span className="featureTitle">فروش کل</span>
        <div className="featureContainer">
          <span className="featureMoney">$2,415</span>
          <span className="featureRate">
            $-1.4
            <ArrowDownwardOutlinedIcon className="featureIcon negative" />
          </span>
        </div>
        <span className="featureSub">نسب به ماه گذشته</span>
      </div>
      {/* feature item 1 */}
      <div className="featureItem">
        <span className="featureTitle">سود</span>
        <div className="featureContainer">
          <span className="featureMoney">$2,415</span>
          <span className="featureRate">
            $+2.4
            <ArrowUpwardOutlinedIcon className="featureIcon" />
          </span>
        </div>
        <span className="featureSub">نسب به ماه گذشته</span>
      </div>
    </div>
  );
}
