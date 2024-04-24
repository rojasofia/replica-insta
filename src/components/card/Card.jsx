import React from "react";
import { useAppContext } from "../../context/AppContext";
import "./card.scss";
import { useNavigate } from "react-router-dom";
function Card({ post = null }) {
  const {
    user: { user, userDispatch },
  } = useAppContext();
  console.log("post", post);
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <div className="container-p">
      {post ? (
        <>
          {post.map((item, index) => (
            <article key={index} className="card-container">
              <div className="header-post">
                <img
                  src={item.image}
                  alt="post"
                  onClick={() => handleImageClick(item.id)}
                />
                <p>{item.username}</p>
              </div>
              <div className="img-main">
                <img
                  src={item.image}
                  alt=""
                  onClick={() => handleImageClick(item.id)}
                />
                <p>
                  <b>{item.username}</b> {item.description}
                </p>
              </div>
            </article>
          ))}
        </>
      ) : null}
    </div>
  );
}

export default Card;
