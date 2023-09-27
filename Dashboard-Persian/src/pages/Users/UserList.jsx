import React from "react";
import "./UserList.css";
import { useState } from "react";
import { userRows } from "../../datas";
import { DataGrid } from "@mui/x-data-grid";

export default function UserList() {
  const [userData, setUserData] = useState(userRows);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params)=>{
        
      }
    },
  ];
  return (
    <div>
      <DataGrid 
      rows={userData}
      columns={columns}
      disableSelectionOnClick
      pageSize={2} />
    </div>
  );
}
