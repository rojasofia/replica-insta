// src/StoryBubble.js
import React from "react";
import "./storybubble.scss"; // Importamos el CSS para el estilo

function StoryBubble({ image, onClick }) {
  return (
    <div className="story-bubble" onClick={onClick}>
      <img src={image} alt="story" />
    </div>
  );
}

export default StoryBubble;
