import React from 'react'
import './DetailsModal.css'

export default function DetailsModal() {
  return (
    <div className='details-modal modal-parent active'>
        <table className='cmd-table'>
            <tr>
                <td>اسم</td>
                <td>قیمت</td>
                <td>محبوبیت</td>
            </tr>

            <tr>
                <td>لپ تاب</td>
                <td>12_000_000 تومان</td>
                <td>91</td>
            </tr>
        </table>
    </div>
  )
}
