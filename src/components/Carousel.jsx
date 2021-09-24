import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselWrapper, Img } from "../assets/styles/style";
import Dudas from "../assets/img/duda.png";
import Services from "../assets/img/servicios.png";
import Inicio from "../assets/img/inicio.png";

const properties = {
  Img: {
    width: "100%",
    height: "350px",
    margin: "0px",
  }
}

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
          <Img src={Inicio}
            width={properties.Img.width}
            height={properties.Img.height}
            margin={properties.Img.margin}
          />
        </div>
        <div>
          <Img src={Dudas}
            width={properties.Img.width}
            height={properties.Img.height}
            margin={properties.Img.margin}
          />
        </div>
        <div>
          <Img src={Services}
            width={properties.Img.width}
            height={properties.Img.height}
            margin={properties.Img.margin} />
        </div>
      </Carousel>
    </CarouselWrapper>
  );
}
export default CarouselComponent;