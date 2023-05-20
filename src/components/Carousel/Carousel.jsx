import React from "react";
import "./carousel.css";
import CarouselItems from "./CarouselItems";
import { pictures } from "./mock";
import CarouselButton from "./CarouselButton";

export default function Carousel(props) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const pictureLength = pictures.length;

  const next = () => {
    if (currentIndex < pictureLength - 1) {
      setCurrentIndex(prevState => prevState + 1);
    }
  };
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
  };

  return (
    <div className="carousel_container">
      <div className="carousel_wrapper">
        {currentIndex > 0 && <CarouselButton className="left_arrow" handleClick={prev} name="L" />}

        <div className="carousel_content_wrapper">
          <div className="carousel_content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            <CarouselItems pictures={pictures} />
          </div>
        </div>
        {currentIndex < pictureLength - 1 && <CarouselButton className="left_arrow" handleClick={next} name="R" />}
      </div>
    </div>
  );
}
