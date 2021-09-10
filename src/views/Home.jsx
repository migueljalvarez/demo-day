import React from "react";

import SearchService from "../components/SearchService";
import Carousel from "../components/Carousel";

import { Container, SuperContainer, Wrapper } from "../assets/styles/style";

const PROP = {
  SuperContainer: {
    margin: "0 0 297px 0",
  },
  containerHome: {
    flexWrap: "wrap",
  },
};

const Home = () => {
  return (
    <SuperContainer margin={PROP.SuperContainer.margin}>
      <Wrapper>
        <Container flexWrap={PROP.containerHome.flexWrap}>
          <Carousel />
          <SearchService />
        </Container>
      </Wrapper>
    </SuperContainer>
  );
};

export default Home;
