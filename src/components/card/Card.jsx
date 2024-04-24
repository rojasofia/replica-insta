import React from "react";
import { useAppContext } from "../../context/AppContext";
import "./card.scss";
function Card({ post = null }) {
  const {
    user: { user, userDispatch },
  } = useAppContext();
  console.log("post", post);
  return (
    <div className="container-p">
      {post ? (
        <>
          {post.map((item, index) => (
            <article key={index} className="card-container">
              <div className="header-post">
                <img src={item.image} alt="post" />
                <p>{item.username}</p>
              </div>
              <div className="img-main">
                <img src={item.image} alt="" />
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
