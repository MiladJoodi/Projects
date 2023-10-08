import React, { useEffect } from "react";
import "./DetailsModal.css";

export default function DetailsModal({ onHide, children }) {
  useEffect(() => {
    const checkKey = (event) => {
        console.log(event);
      if (event.keyCode === 27) {
        onHide();
      }
    };

    window.addEventListener("keydown", checkKey);

    return () => window.removeEventListener('keydown', checkKey)
  });

  return (
    <div className="modal-parent active">
      <div className="details-modal">
        {children}
      </div>
    </div>
  );
}
