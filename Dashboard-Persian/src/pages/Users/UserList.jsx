import React from "react";
import "./UserList.css";
import { useState } from "react";
import { userRows } from "../../datas";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


export default function UserList() {
  const [userData, setUserData] = useState(userRows);
  const columns = [
    {
      field: "id",
      headerName: "شماره",
      width: 90,
    },
    {
      field: "user",
      headerName: "کاربر",
      width: 200,
      renderCell: (params)=>{
        return(
          <Link to="" className="link">
          <div className="userListUser link">
            <img src={params.row.avatar} className="userListUserImg" />
            {params.row.username}
          </div>
          </Link>
        )
      }
    },
    {
      field: "email",
      headerName: "ایمیل",
      width: 200,
    },
    {
      field: "status",
      headerName: "وضعیت",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "تراکنش",
      width: 160,
    },
    {
      field: "action",
      headerName: "تغییرات",
      width: 160,
      renderCell: (params)=>{
        return(
          <>
          <Link to={`/user/${params.row.id}`} className="link">
            <button className="userListEdit">ویرایش</button>
          </Link>
            <DeleteOutlineOutlinedIcon className="userListDelete" onClick={()=> userDelete(params.row.id)} />
          </>
        )
      }
    },
  ];

  const userDelete = userID =>{
    setUserData(userData.filter(user=> user.id !== userID))
  }

  return (
    <div className="userList">
      <DataGrid 
      rows={userData}
      columns={columns}
      disableSelectionOnClick
      pageSize={2} />
    </div>
  );
}
