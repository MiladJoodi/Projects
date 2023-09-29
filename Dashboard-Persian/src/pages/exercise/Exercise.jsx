import React from "react";
import { useEffect, useState } from "react";
import useUpdateLogger from "./../../Hooks/useUpdateLogger";
import useCounter from "./../../Hooks/useCounter";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import "./Exercise.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function Exercise() {
  const [posts, setPosts] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "http://api.navasan.tech/latest/?api_key=freewywbYdpWmuHmjZu2TMT6XXW3Vvrd"
    )
      .then((res) => res.json())
      .then((datas) => {
        // console.log(datas.dolar_harat_sell.value);
        setPosts(datas);
        console.log(posts.sekkeh.value);
        setIsPending(false);
        setError(null);
      });
  }, []);

  return (
    <div className="currency">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {/* dollar */}
      <div className="featureItem currencyItem">
        <div className="featureItemContainer">
          <span className="featureTitle">دلار</span>
          <div className="featureContainer">
            <span className="featureMoney persianNumber">
              {posts.sekkeh.value}
            </span>
            <span className="featureRate persianNumber">
              {posts.sekkeh.change}%
              <ArrowUpwardOutlinedIcon className="featureIcon" />
            </span>
          </div>
        </div>
        <span className="featureSub persianNumber">
          تاریخ به روز رسانی: {posts.sekkeh.date}
        </span>
      </div>
      {/* dollar */}
      <div className="featureItem currencyItem">
        <div className="featureItemContainer">
          <span className="featureTitle">دلار خرید</span>
          <div className="featureContainer">
            <span className="featureMoney persianNumber">
              {posts.usd_buy.value}
            </span>
            <span className="featureRate persianNumber">
              {posts.sekkeh.change}%
              <ArrowUpwardOutlinedIcon className="featureIcon" />
            </span>
          </div>
        </div>
        <span className="featureSub persianNumber">
          تاریخ به روز رسانی: {posts.sekkeh.date}
        </span>
      </div>

      {/* table */}
      {/* <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) => (
            <TableRow
              key={post.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th">
          
              </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}

    </div>
  );
}
