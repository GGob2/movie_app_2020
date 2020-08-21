import React from "react";

function Food({ name, picture }) {
  return (
          <div>
             <h2>I like {name} </h2>
             <img src = {picture} />
          </div>
        );

const foodILike = [
  {
    name: "Kimchi",
    image: "",
  },

  {
    name: "Samgyeopsal",
    image:
      "",
  },

  {
    name: "Bibimbap",
    image:"",
  },

  {
    name: "Doncasu",
    image: "",
  },

  {
    name: "Kimbap",
    image:"",
      
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture = {dish.image}/>
        ))}
    </div>
  );
}

export default App;