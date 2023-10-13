import React, {useState,useEffect} from 'react'
import './Products.css'
import AddNewProduct from '../AddNewProduct/AddNewProduct'
import ProductTable from '../ProductTable/ProductTable'

export default function Products() {
  const [allProducts, setAllProducts] = useState([])

  useEffect(()=>{
    getAllProducts()
  },[])

function getAllProducts(){
  fetch('http://localhost:8000/api/products/')
  .then(res=> res.json())
  .then(result=> {
    setAllProducts(result)
  })
}
  return (
    <>
    <AddNewProduct getAllProducts={getAllProducts} />
    <ProductTable allProducts={allProducts} getAllProducts={getAllProducts} />
    </>
  )
}
