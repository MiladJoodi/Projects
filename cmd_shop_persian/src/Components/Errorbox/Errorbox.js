import React from "react";
import "./Errorbox.css";

export default function Errorbox({ msg }) {
  return (
    <div className="cms-empty-error">
      <h1>{msg}</h1>
    </div>
  );
}
