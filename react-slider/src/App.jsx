import Card from "./components/Card";
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpg";
import Img5 from "../assets/img5.jpg";
import Img6 from "../assets/img6.jpg";
import Img7 from "../assets/img7.webp";
import Img8 from "../assets/img8.jpg";
import { useState } from "react";
import { ArrowBigLeft } from "lucide-react";
import { ArrowBigRight } from "lucide-react";
import { Circle } from 'lucide-react';
import { CircleDot } from 'lucide-react';

const usersInfo = [
  {
    name: "James Carter",
    age: "27",
    info: "Self taught developer",
    img: Img1,
  },
  {
    name: "Jones Danver",
    age: "28",
    info: "Self taught developer",
    img: Img2,
  },
  {
    name: "Hailey Smith",
    age: "25",
    info: "Self taught developer",
    img: Img3,
  },
  {
    name: "Marie Stitch",
    age: "29",
    info: "Self taught developer",
    img: Img4,
  },
  {
    name: "Jack Joseph",
    age: "27",
    info: "Self taught developer",
    img: Img5,
  },
  {
    name: "Breanna Pascal",
    age: "19",
    info: "Aspiring Entrepreneur",
    img: Img6,
  },
  {
    name: "Harmony Simmons",
    age: "23",
    info: "Self taught developer",
    img: Img7,
  },
  {
    name: "Tarique Hammens",
    age: "27",
    info: "Self taught developer",
    img: Img8,
  },
];

function App() {
  const [currentCard, setCurrentCard] = useState(0);

  const previousImg = () => {
    if (currentCard > 0) {
    setCurrentCard((prevCard) => prevCard - 1)
    }
  };

  const nextImg = () => {
    setCurrentCard((prevCard) => prevCard < usersInfo.length - 1 ? prevCard + 1 : prevCard)
  }
  return (
    <div className="body">
      {usersInfo.map((user, id) => (
        <Card
          key={id}
          user={user}
          className={id === currentCard ? "active" : "not-active"}
        />
      ))}

      <div className="btns">
        <ArrowBigLeft className={`btn ${currentCard === 0 ? "disabled" : ""}`} onClick={previousImg} />

        <ArrowBigRight className={`btn ${currentCard === usersInfo.length - 1 ? "disabled" : ""}`} onClick={nextImg} />
      </div>

        <div className="circles">
      {usersInfo.map((_, id) => (
        <span onClick={() => setCurrentCard(id)}>
        {id === currentCard ? <CircleDot className="dot" /> : <Circle className="circle" />}
        </span>
      ))}
      </div>

    </div>
  );
}

export default App;
