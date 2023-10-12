import React from 'react'
import './Products.css'
import ErrorBox from '../ErrorBox/ErrorBox'
import AddNewProduct from '../AddNewProduct/AddNewProduct'
import ProductTable from '../ProductTable/ProductTable'

export default function Products() {
  return (
    <>
    <ErrorBox mgs="هیچ محصولی یافت نشد" />
    <AddNewProduct />
    <ProductTable />
    </>
  )
}
