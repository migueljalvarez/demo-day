import React, { useEffect } from "react";

import SearchService from "../components/SearchService";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import { Container, SuperContainer, Wrapper } from "../assets/styles/style";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../redux/actions/userActions";

const PROP = {
  SuperContainer: {
    margin: "0 0 297px 0",
  },
  containerHome: {
    flexWrap: "wrap",
  },
};

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(userActions.findLastUser());
  }, [dispatch]);

  return (
    <SuperContainer margin={PROP.SuperContainer.margin}>
      <Wrapper>
        <Container flexWrap={PROP.containerHome.flexWrap}>
          <Carousel />
          <SearchService />
          <Container>
            {users.map((user, index) => (
              <Card key={index} user={user} />
            ))}
          </Container>
        </Container>
      </Wrapper>
    </SuperContainer>
  );
};

export default Home;
