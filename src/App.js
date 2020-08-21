import React from "react";
import PropTypes from "prop-types";

// 실질적으로 사용자에게 보여지는 부분
// name, picture, rating을 App에서 받아옴
function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name} </h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

// 정보 display에 사용되는 배열
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://bapuri.co.kr/new2/upload/menu_01/2016_12_16/hero_qGmO3_2016_12_16_15_13_27.jpg",
    rating: 5,
  },

  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://bapuri.co.kr/new2/upload/menu_01/2016_12_16/hero_qGmO3_2016_12_16_15_13_27.jpg",
    rating: 4.9,
  },

  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://bapuri.co.kr/new2/upload/menu_01/2016_12_16/hero_qGmO3_2016_12_16_15_13_27.jpg",
    rating: 4.8,
  },

  {
    id: 4,
    name: "Doncasu",
    image:
      "https://bapuri.co.kr/new2/upload/menu_01/2016_12_16/hero_qGmO3_2016_12_16_15_13_27.jpg",
    rating: 3.9,
  },

  {
    id: 5,
    name: "Kimbap",
    image:
      "https://bapuri.co.kr/new2/upload/menu_01/2016_12_16/hero_qGmO3_2016_12_16_15_13_27.jpg",
    rating: 4.7,
  },
];

function App() {
  return (
    //foodILiKe 배열에 map 함수 사용, dish로 받아옴 (1개씩), 각각 새로운 변수에 대입
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

// propTypes 모듈 이용 --> type 관련
Food.propTypes = {
  // isRequired : 무조건 존재해야함
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,

  // number로만 끝나면 무조건 존재해야하는 것은 아니지만
  // 가운데 자리에 위치한 number 자료형이여야 한다는 뜻
  rating: PropTypes.number,
};

export default App;
