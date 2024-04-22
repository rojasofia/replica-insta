import React from "react";

function Card() {
  return (
    <article className="">
      <section className="" onClick={() => goToProfile(post.userId)}>
        <figure className="">
          <img className="" src={post.avatar} alt={post.name} />
        </figure>
        <p className="">{post.name}</p>
      </section>
      <figure className="r">
        <img
          className=""
          src={post.media}
          alt={`${post.name}' post`}
          onClick={() => (post.userId, post.id)}
        />
      </figure>
      <section className="">
        <div className="">
          <figure className="r">
            {user.likesStore.includes(post.id) ? (
              <img
                className=""
                src="/images/heart-full.svg"
                alt="heart icon"
                onClick={() => handleLike(post.id)}
              />
            ) : (
              <img
                className=""
                src="/images/heart.svg"
                alt="heart icon"
                onClick={() => handleLike(post.id)}
              />
            )}
            <figcaption className="">{post.likes.length}</figcaption>
          </figure>
          <figure
            className=""
            onClick={() => goToComments(post.userId, post.id)}
          >
            <img className="" src="/images/comment.svg" alt="comment icon" />
            <figcaption className="">{post.comments.length}</figcaption>
          </figure>
          <figure className="">
            <img className="" src="/images/send.svg" alt="send icon" />
            <figcaption className=""></figcaption>
          </figure>
        </div>
        <figure className="">
          {user.postStore.includes(post.id) ? (
            <img
              className="home-feed__icon-save home-feed__icon-full"
              src="/images/save-full.svg"
              alt="save icon"
              onClick={() => post.id}
            />
          ) : (
            <img
              className="home-feed__icon-save"
              src="/images/save.svg"
              alt="save icon"
              onClick={() => post.id}
            />
          )}
        </figure>
      </section>
      <p className="">
        <strong onClick={() => post.userId}>{post.name} </strong>
        {post.caption}
      </p>
    </article>
  );
}

export default Card;
