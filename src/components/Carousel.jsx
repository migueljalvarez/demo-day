import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselWrapper, Img } from "../assets/styles/style";



const CarouselComponent = () => {
  return (
    <CarouselWrapper>
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showThumbs={false}
        showStatus={false}
        intervalo={7000}
      >
        <div>
          <Img src="../imagen1.jpg" />
        </div>
        <div>
          <Img src="../imagen2.jpg" />
        </div>
        <div>
          <Img src="../imagen3.jpg" />
        </div>
      </Carousel>
    </CarouselWrapper>
  );
}

export default CarouselComponent;