import React from "react";
// import PropTypes from "prop-types";
import Home from "./routes/Home";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";

function App() {
  return (
    // HashRouter 때문에 주소창에 #이 붙음
    <HashRouter>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;

/* 
  영화 앱을 만들기 위한 주석 

  // react 앱의 생명주기 : Constructor --> render --> ComponentDidMount
  constructor(props) {
    super(props);
    console.log("hello");
  }
  // state는 반드시 클래스형 컴포넌트 안에서 소문자를 이용해서 사용해야한다.
  // state는 객체형태의 데이터다.
  state = {
    count: 0,
  };
  // add 함수 정의

  add = () => {
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };
  // minus 함수 정의

  minus = () => {
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };

  componentDidMount() {
    console.log("렌더링 됨");
  }

  // 화면이 어떤 이벤트로 인해 Update 될때 실행
  // setState --> render --> componentDidUpdate
  componentDidUpdate() {
    console.log("화면 업데이트됨!");
  }

  // 컴포넌트가 화면을 떠날 때 실행됨
  componentWillUnmount() {
    console.log("Goodbye");
  }

  // class는 함수가 아니기 때문에, return문을 사용하려면 render() 함수를 사용해야 한다.
  render() {
    console.log("렌더링중");
    // class를 this로 받음 . <-- 연산자를 사용해서 객체 활용가능
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

*/

/* State를 배우기 위한 주석

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
*/
