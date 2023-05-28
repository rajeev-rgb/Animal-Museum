import { useState } from "react";
import AnimalCard from "./AnimalCard";
import "./App.css";

const getRandomAnimals = () => {
  const animals = ["cat", "dog", "gator", "cow", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
};

function App() {
  const [animals, setAnimals] = useState([]);

  const handleChange = () => {
    setAnimals([...animals, getRandomAnimals()]);
  };

  return (
    <div className="app">
      <button onClick={handleChange}>Add Animal</button>
      {animals.map((animal, i) => {
        return <AnimalCard className="animal-list" type={animal} key={i} />;
      })}
    </div>
  );
}

export default App;
