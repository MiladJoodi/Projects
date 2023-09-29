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
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((datas) => {
        console.log(datas);
        setPosts(datas);
        setIsPending(false);
        setError(null);
      });
  }, []);

  return (
    <div className="exercise">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {posts &&
        posts.map(post => (
          <>
            <h2>{post.title}</h2>
            <hr />
          </>
        ))}
    </div>
  );
}
