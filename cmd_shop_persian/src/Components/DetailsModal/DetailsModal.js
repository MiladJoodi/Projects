import React from "react";
import "./DetailsModal.css";

export default function DetailsModal() {
  return (
    <div className="modal-parent active">
      <div className="details-modal">
        <table className="cmd-table">
          <thead>
            <tr>
              <td>اسم</td>
              <td>قیمت</td>
              <td>محبوبیت</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>لپ تاب</td>
              <td>12_000_000 تومان</td>
              <td>91</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
