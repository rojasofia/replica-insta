import React, { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import { getAllPosts } from "../../services/post";

const Home = () => {
  const {
    post: { post, postDispatch },
  } = useAppContext();

  useEffect(() => {
    getAllPosts().then((response) => {
      console.log(response);
      postDispatch({
        type: "fillPost",
        payload: response,
      });
    });
  }, []);
  return (
    <div>
      <h1>Inicio feed</h1>
      {post.post.map((item) => (
        <img key={item.id} src={item.media} alt={item.userId} />
      ))}
    </div>
  );
};

export default Home;
