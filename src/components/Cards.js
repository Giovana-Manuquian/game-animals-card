import React from "react";
import { FaStar, FaBolt, FaBrain } from "react-icons/fa";
import giraffeImage from "../assets/giraffe.png";
import hippopotamusImage from "../assets/hipoppotamus.png";
import lionImage from "../assets/lion.png";
import turtleImage from "../assets/turtle.png";
import zebraImage from "../assets/zebra.png";
import monkeyImage from "../assets/monkey.png";
import pandaImage from "../assets/panda.png";
import pigImage from "../assets/pig.png";
import owlImage from "../assets/owl.png";
import sealImage from "../assets/seal.png";
import "./Cards.css";

function Cards() {
  const images = [
    { src: giraffeImage, forceStars: 3, intelligenceStars: 2 },
    { src: hippopotamusImage, forceStars: 4, intelligenceStars: 1 },
    { src: lionImage, forceStars: 4, intelligenceStars: 2 },
    { src: turtleImage, forceStars: 2, intelligenceStars: 2 },
    { src: zebraImage, forceStars: 2, intelligenceStars: 2 },
    { src: monkeyImage, forceStars: 2, intelligenceStars: 4 },
    { src: pandaImage, forceStars: 1, intelligenceStars: 2 },
    { src: pigImage, forceStars: 2, intelligenceStars: 2 },
    { src: owlImage, forceStars: 1, intelligenceStars: 3 },
    { src: sealImage, forceStars: 2, intelligenceStars: 2 },
  ];

  return (
    <div>
      <div className="grid-container">
        {images.map((image, index) => (
          <div key={index} className="card">
            <img src={image.src} alt={`Image ${index + 1}`} />
            <div className="stars">
              <div className="icon">
                <FaBolt className="force-icon" />
                <span className="colon">:</span>
              </div>
              {[...Array(image.forceStars)].map((_, starIndex) => (
                <FaStar key={starIndex} className="star-icon" />
              ))}
            </div>
            <div className="stars">
              <div className="icon">
                <FaBrain className="force-icon" />
                <span className="colon">:</span>
              </div>
              {[...Array(image.intelligenceStars)].map((_, starIndex) => (
                <FaStar key={starIndex} className="star-icon" />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="footer">
        <p>&copy; Giovana Manuquian 2023</p>
      </div>
    </div>
  );
}

export default Cards;
