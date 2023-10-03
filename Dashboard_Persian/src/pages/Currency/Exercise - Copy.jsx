import React from "react";
import { useEffect, useState } from "react";
import useUpdateLogger from "./../../Hooks/useUpdateLogger";
import useCounter from "./../../Hooks/useCounter";
import "./Exercise.css";

export default function Exercise() {
  const [posts, setPosts] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://api.navasan.tech/latest/?api_key=freewywbYdpWmuHmjZu2TMT6XXW3Vvrd")
      .then((res) => res.json())
      .then((datas) => {
        console.log(datas.aave.value);
        setPosts(datas);
        setIsPending(false);
        setError(null);
      });
  }, []);

  return (
    <div className="exercise">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      
    </div>
  );
}
