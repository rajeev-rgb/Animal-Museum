import { useState } from "react";
import "./AnimalCard.css";
import cow from "./images/cow.svg";
import bird from "./images/bird.svg";
import cat from "./images/cat.svg";
import dog from "./images/dog.svg";
import horse from "./images/horse.svg";
import gator from "./images/gator.svg";
import heart from "./images/heart.svg";

const animalSvg = {
  cow,
  bird,
  cat,
  dog,
  horse,
  gator,
};

function AnimalCard({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" src={animalSvg[type]} alt="animal image" />;
      <img
        className="heart"
        src={heart}
        alt="heart image"
        style={{ width: 10 + 10 * clicks + "px" }}
      />
      <p>Click to like</p>
    </div>
  );
}

export default AnimalCard;
