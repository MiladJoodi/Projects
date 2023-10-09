import React, { useEffect, useState } from 'react'
import DeleteModal from '../DeleteModal/DeleteModal'
import ErrorBox from '../Errorbox/Errorbox'

export default function Comments() {

  const [allComments, setAllComments] = useState([])

  useEffect(()=>{
    fetch('http://localhost:8000/api/comments/')
    .then(res=> res.json())
    .then()
  },[])

  return (
    <div className='cms-main'>
    <ErrorBox msg="هیچ کامنتی یافت نشد" />
    
    <table className='cms-table'>
      <tr>
        <th>اسم کاربر</th>
        <th>محصول</th>
        <th>کامنت</th>
        <th>تاریخ</th>
        <th>ساعت</th>
      </tr>

      <tr>
        <td>علی</td>
        <td>آیفون 13</td>
        <td><button>دیدن متن</button></td>
        <td>1401-01-08</td>
        <td>14:12</td>
        <td>
          <button>حذف</button>
          <button>ویرایش</button>
          <button>پاسخ</button>
          <button>تایید</button>
        </td>
      </tr>

    </table>
    
    </div>
  )
}
