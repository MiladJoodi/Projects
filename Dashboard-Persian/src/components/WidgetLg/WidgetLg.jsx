import React from "react";

export default function WidgetLg() {
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">آخرین تراکنش ها</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">نام مشتری</th>
          <th className="widgetLgTh">تاریخ</th>
          <th className="widgetLgTh">مبلغ</th>
          <th className="widgetLgTh">وضعیت</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="images/profile3" />
            <span className="widgetLgName">حمیدرضا سرفراز</span>
          </td>
          <td className="widgetLgDate persianNumber">
            4 مهر 1402
          </td>
          <td className="widgetLgAmount">
                475,000 تومان
          </td>
          <td className="widgetLgStatus"></td>
        </tr>
      </table>
    </div>
  );
}
