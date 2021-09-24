import React, { useEffect } from "react";

import SearchService from "../components/SearchService";
import UserCounter from "../components/UsersCounter";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import {
  Container,
  ContainerTitleH1,
  SuperContainer,
  Wrapper,
} from "../assets/styles/style";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../redux/actions/userActions";
import { findCategories } from "../redux/actions/categoriesActions";
import { findServices } from "../redux/actions/serviceActions";
import CardService from "../components/CardService";
import ServicesCounter from "../components/ServicesCounter";
import TutorialOfferDescription from "../components/TutorialOfferDescription";
import TutorialOfferComp from "../components/TutorialOfferComp";

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
  const services = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(userActions.findLastUser());
    dispatch(findServices());
    dispatch(findCategories());
  }, [dispatch]);

  return (
    <SuperContainer margin={PROP.SuperContainer.margin}>
      <Wrapper>
        <Container flexWrap={PROP.containerHome.flexWrap}>
          <Carousel />
          <TutorialOfferComp/>
          <SearchService />
          <UserCounter />
          <Container>
            <ContainerTitleH1 align="center" padding="10px">
              Ultimos Usuarios Registrado
            </ContainerTitleH1>

            <Container justifyContent="center">
              {users.map((user) => (
                <Card key={user._id} user={user} />
              ))}
            </Container>
          </Container>
          <ServicesCounter />
          <Container>
            <ContainerTitleH1 align="center" padding="10px">
              Ultimos servicios agregados
            </ContainerTitleH1>

            <Container justifyContent="center">
              {services.map((service) => (
                <CardService key={service._id} service={service} />
              ))}
            </Container>
          </Container>
          <TutorialOfferDescription />
        </Container>
      </Wrapper>
    </SuperContainer>
  );
};

export default Home;
