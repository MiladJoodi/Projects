import React from "react";
import "./Products.css";
import { useState } from "react";
import { products } from "../../datas";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


export default function Products() {
  const [productsData, setProductsData] = useState(products);

  const productDelete = productID =>{
    setProductsData(productsData.filter(product=> product.id !== productID))
  }


  const columns = [
    {
      field: "id",
      headerName: "شماره",
      width: 120,
    },
    {
      field: "title",
      headerName: "نام محصول",
      width: 350,
      renderCell: (params)=>{
        return(
            <Link to={`/product/${params.row.id}`} className="link">
          <div className="userListUser">
            <img src={params.row.avatar} className="userListUserImg" />
            {params.row.title}
          </div>
          </Link>
        )
      }
    },
    {
      field: "price",
      headerName: "قیمت",
      width: 120,
    },
    {
      field: "action",
      headerName: "تغییرات",
      width: 160,
      renderCell: (params)=>{
        return(
          <>
          <Link to={`/products/${params.row.id}`} className="link">
            <button className="userListEdit">ویرایش</button>
          </Link>
            <DeleteOutlineOutlinedIcon className="userListDelete" onClick={()=> productDelete(params.row.id)} />
          </>
        )
      }
    },
  ];



  return (
    <div className="userList">
      <DataGrid 
      rows={productsData}
      columns={columns}
      disableSelectionOnClick
      pageSize={2}
      checkboxSelection
      />
      
    </div>
  );
}
