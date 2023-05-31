import React from "react";
import "./HomeImg.css";
import Fox from "../assets/fox.png";

function HomeImg() {
  return (
    <div className="container">
      <img src={Fox} alt="Imagem" className="image" />
      <div className="content">
        <h1 className="title">Hi, Welcome!</h1>
        <p className="paragraph">
          Discover the <span>magic of animals</span>! Have fun, learn and create
          amazing memories with our children's card game. Explore the animal
          kingdom in fun and educational challenges.
        </p>
      </div>
    </div>
  );
}

export default HomeImg;
