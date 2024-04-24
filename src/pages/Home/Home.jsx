import React, { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import { getAllPosts } from "../../services/post";
import Card from "../../components/card/Card";
import "./home.scss";
import StoryBubble from "../../components/StoryBubble/StoryBubble";
import iconApp from "../../../public/logoFindy.png";
import { CiHeart } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";
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
  const handleStoryClick = () => {
    alert("Clic en la historia!");
  };

  return (
    <div>
      <div className="header-main">
        <div className="header-text">
          <img src={iconApp} alt="iconapp" />
          <h2 id="title-main">Findy</h2>
        </div>
        <div className="header-icons">
          <CiHeart size={30} />
          <TiMessages size={30} />
        </div>
      </div>
      <div className="story-container">
        {post.post.map((item, index) => (
          <StoryBubble
            key={index}
            image={item.image}
            onClick={handleStoryClick}
          />
        ))}
      </div>
      {/*       
      ))} */}
      <Card post={post.post} />
    </div>
  );
};

export default Home;
