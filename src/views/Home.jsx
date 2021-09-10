import React from "react";

import SearchService from "../components/SearchService";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

import {
  Container,
  Heading,
  SuperContainer,
  Wrapper,
} from "../assets/styles/style";

const PROP ={
  SuperContainer:{
    margin: '0 0 297px 0',
  },
  containerHome:{
      flexWrap: 'wrap',
  }
}


const Home = () => {
  return (
    <div>
      <SuperContainer margin={PROP.SuperContainer.margin}>
        <Wrapper>
          <Container flexWrap={PROP.containerHome.flexWrap}>
            <Carousel />
            <SearchService />
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
