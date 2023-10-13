import React from "react";
import "./Comments.css";
import ErrorBox from "../ErrorBox/ErrorBox";

export default function Comments() {

  const

  return (
    <div className="cms-main">
      <ErrorBox msg="هیچ نظری یافت نشد" />

      <table className="cms-table">
        <thead>
          <tr>
            <th>نام کاربر</th>
            <th>محصول</th>
            <th>متن کامنت</th>
            <th>تاریخ ثبت</th>
            <th>ساعت ثبت</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>علی</td>
            <td>آیفون 13</td>
            <td><button>دیدن کامنت</button></td>
            <td>1402-07-22</td>
            <td>14:12</td>
            <td className="comment-btn-group">
              <button>حذف</button>
              <button>ویرایش</button>
              <button>پاسخ</button>
              <button>تایید</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
