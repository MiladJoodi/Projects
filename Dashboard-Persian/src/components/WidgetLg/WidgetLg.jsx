import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import './WidgetLg.css'
import { transactions } from '../../datas'

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{ type }</button>;
  };

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
        {transactions.map(transaction=>(
          <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={transaction.img} className="widgetLgImg" />
            <span className="widgetLgName">{transaction.name}</span>
          </td>
          <td className="widgetLgDate persianNumber">{transaction.date}</td>
          <td className="widgetLgAmount persianNumber">{transaction.amount}</td>
          <td className="widgetLgStatus">
            <Button type={transaction.status} />
          </td>
        </tr>
        ))}
        
      </table>
    </div>
  );
}
