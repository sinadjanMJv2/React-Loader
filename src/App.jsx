import React, { useState, useEffect } from "react";
import preLoader from './assets/bouncing-circles.svg';



function App() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://dummyjson.com/post/1")
    .then((res) => res.json())
    .then((data) => {
      setPost(data)
      setLoading(false) 
    });
  }, []);
  return (
  
      <article>
        {
          loading ? <img src={preLoader}/> :
          <>
          
          <h1>{post?.title}</h1>
          <p>{post?.body}</p>
          </>
 
        }
      </article>
  
  );
}

export default App;
