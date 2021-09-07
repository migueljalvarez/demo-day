import React from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import {
  Container,
  Heading,
  SuperContainer,
  Wrapper,
} from "../assets/styles/style";

const Home = () => {
  return (
    <div>
      <SuperContainer>
        <Wrapper>
          <Container>
            <Carousel />
          </Container>
        </Wrapper>
      </SuperContainer>

      {/* <main>
      <Heading>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolorum quas cumque, 
perspiciatis et eaque quae praesentium nisi mollitia minima veritatis esse iure soluta repellendus, nostrum assumenda non, nulla fuga?
      </Heading>
    </main>
    <Footer /> */}
    </div>
  );
};

export default Home;
