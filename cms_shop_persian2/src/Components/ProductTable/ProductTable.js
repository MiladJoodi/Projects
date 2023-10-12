import React from 'react'
import './ProductTable.css'

export default function ProductTable() {
  return (
    <div className='product-table-container'>
      <table className='product-table'>
        <thead>
          <tr className='product-table-head'>
            <th>عکس</th>
            <th>اسم</th>
            <th>قیمت</th>
            <th>موجودی</th>
          </tr>
        </thead>
        <tbody>
          <tr className='product-table-row'>
            <td>
                <img src="/img/oil.jpeg" className='product-table-img' />
            </td>
            <td>روغن سرخ کردنی</td>
            <td>92000 تومان</td>
            <td>82</td>
            <td>
                <button className='product-table-btn'>جزئیات</button>
                <button className='product-table-btn'>حذف</button>
                <button className='product-table-btn'>ویرایش</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
