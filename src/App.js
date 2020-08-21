import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name} </h2>
      <img src={picture} />
    </div>
  );
}
const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://bapuri.co.kr/new2/upload/menu_01/2016_12_16/hero_qGmO3_2016_12_16_15_13_27.jpg",
  },

  {
    name: "Samgyeopsal",
    image:
      "https://bapuri.co.kr/new2/upload/menu_01/2016_12_16/hero_qGmO3_2016_12_16_15_13_27.jpg",
  },

  {
    name: "Bibimbap",
    image:
      "https://bapuri.co.kr/new2/upload/menu_01/2016_12_16/hero_qGmO3_2016_12_16_15_13_27.jpg",
  },

  {
    name: "Doncasu",
    image:
      "https://bapuri.co.kr/new2/upload/menu_01/2016_12_16/hero_qGmO3_2016_12_16_15_13_27.jpg",
  },

  {
    name: "Kimbap",
    image:
      "https://bapuri.co.kr/new2/upload/menu_01/2016_12_16/hero_qGmO3_2016_12_16_15_13_27.jpg",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
