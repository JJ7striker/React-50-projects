import { useState } from "react";
import { Star } from "lucide-react";

function App() {
  const [currentStar, setCurrentStar] = useState(0);
  const array = [...Array(5)];

  const handleIncreaseStar = (id) => {
    const currentIndex = id + 1;
    setCurrentStar((prevStar) =>
      currentIndex === prevStar ? 0 : currentIndex,
    );
  };

  return (
    <div className="div">
      <h1>Star System</h1>

      {array.map((_, index) => {
        const activeIndex = index < currentStar;
        return (
          <Star
            key={index}
            style={{ height: "90px", width: "90px", cursor: "pointer" }}
            className={`${activeIndex ? "fill" : ""}`}
            onClick={() => {
              handleIncreaseStar(index);
            }}
          />
        );
      })}
    </div>
  );
}

export default App;
