import React from 'react'
import './Products.css'
import ErrorBox from '../ErrorBox/ErrorBox'
import AddNewProduct from '../AddNewProduct/AddNewProduct'

export default function Products() {
  return (
    <>
    <AddNewProduct />
    <ErrorBox mgs="هیچ محصولی یافت نشد" />
    </>
  )
}
