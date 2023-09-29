import React from "react";
// import { useState, useEffect } from "react";
import "./Exercise.css";
import useFetch from './../../Hooks/useFetch'

export default function Exercise() {

  const {posts, isPending, error} = useFetch('https://jsonplaceholder.typicode.com/posts')


  return (
    <div className="exersice">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.id} - {post.title}</h2>
            <hr />
          </div>
        ))}
    </div>
  );
}
