import React from 'react'
import './WidgetLg.css'
import { trancactions } from './../../datas'

export default function WidgetLg() {

    const Button = ({type}) =>{
        return <button className={'widgetLgButton '+ type}>{type}</button>
    }

  return (
    <div className='widgetLg'>
        <h3 className='widgetLgTitle'>Lastest Transactions</h3>
        <table className='widgetLgTable'>
            <tr className='widgetLgTr'>
                <th className='widgetLgTh'>Customer</th>
                <th className='widgetLgTh'>Date</th>
                <th className='widgetLgTh'>Amount</th>
                <th className='widgetLgTh'>Status</th>
            </tr>
            
            {trancactions.map((trancaction)=> (
                <tr key={trancaction.id} className='widgetLgTr'>
                <td className='widgetLgUser'>
                    <img src={trancaction.img} className='widgetLgImg' />
                    <span className='widgetLgName'>{trancaction.costumer}</span>
                </td>
                <td className='widgetLgDate'>{trancaction.date}</td>
                <td className='widgetLgAmount'>
                    ${trancaction.amount}
                </td>
                <td className='widgetLgStatus'>
                    <Button type={trancaction.status} />
                </td>
            </tr>
            ))}


        </table>
    </div>
  )
}
