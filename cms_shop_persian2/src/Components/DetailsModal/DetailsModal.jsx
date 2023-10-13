import React, { useEffect } from 'react'
import './DetailsModal.css'

export default function DetailsModal({onHide}) {

    useEffect(()=>{
        const checkKey = (event)=>{
            if(event.keyCode === 27){
                onHide()
            }
        }
        window.addEventListener('keydown', checkKey)
        return ()=> window.removeEventListener('keydown', checkKey)
    })

  return (
    <div className='details-modal modal-parent active'>
        <table className='cms-table'>
           <thead>
           <tr>
                <th>اسم</th>
                <th>قیمت</th>
                <th>محبوبیت</th>
            </tr>
           </thead>
           <tbody>
            <tr>
                <td>روغن 800 گرمی</td>
                <td>84000</td>
                <td>75</td>
            </tr>
           </tbody>
        </table>
    </div>
  )
}
