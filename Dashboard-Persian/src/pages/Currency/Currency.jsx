import React from "react";
import { useEffect, useState } from "react";
import useUpdateLogger from "../../Hooks/useUpdateLogger";
import useCounter from "../../Hooks/useCounter";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import "./Currency.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Currency() {
  const [posts, setPosts] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchi()
  }, []);
  
  const fetchi = async ()=>{
    await fetch(
      "http://api.navasan.tech/latest/?api_key=freeq1VciNN65SI2LhRa9xpXS2UphLBY"
    )
      .then((res) => res.json())
      .then(datas => {
        // console.log(datas.dolar_harat_sell.value);
        setPosts(Object.entries(datas));
        console.log(posts);
        // console.log(posts.abshodeh.value);
        setIsPending(false);
        setError(null);
      });
  }

  return (
    <div className="currency">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {/* dollar */}
      <div className="currencyItemContainer">
        <div className="featureItem currencyItem">
          <div className="featureItemContainer">
            <span className="featureTitle">دلار خرید</span>
            <div className="featureContainer">
              <span className="featureMoney persianNumber">
                {/* {posts.usd_buy.value} */}
              </span>
              <span className="featureRate persianNumber">
                {/* {posts.abshodeh.change}% */}
                <ArrowUpwardOutlinedIcon className="featureIcon" />
              </span>
            </div>
          </div>
          <span className="featureSub persianNumber">
            {/* تاریخ به روز رسانی: {posts.abshodeh.date} */}
          </span>
        </div>
        {/* dollar */}
        <div className="featureItem currencyItem">
          <div className="featureItemContainer">
            <span className="featureTitle">دلار فروش</span>
            <div className="featureContainer">
              <span className="featureMoney persianNumber">
                {/* {posts.abshodeh.value} */}
              </span>
              <span className="featureRate persianNumber">
                {/* {posts.abshodeh.change}% */}
                <ArrowUpwardOutlinedIcon className="featureIcon" />
              </span>
            </div>
          </div>
          <span className="featureSub persianNumber">
            {/* تاریخ به روز رسانی: {posts.abshodeh.date} */}
          </span>
        </div>
      </div>

      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{fontWeight: "bold"}} align="right" className="persianNumber">ارز</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="right" className="persianNumber">قیمت</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="right" className="persianNumber">تغییرات</TableCell>
              <TableCell style={{fontWeight: "bold"}} align="right" className="persianNumber">آخرین به روز رسانی</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

        {posts && posts.map(post=>(
        <>
        {/* <div>{post[1].value}</div> */}
        <TableRow>
        <TableCell align="right" className="persianNumber">{post[0]}</TableCell>
        <TableCell align="right" className="persianNumber">{post[1].value}</TableCell>
        <TableCell align="right" className="persianNumber">{post[1].change}</TableCell>
        <TableCell align="right" className="persianNumber">{post[1].date}</TableCell>
        </TableRow>
        </>
        ))}
          


          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
