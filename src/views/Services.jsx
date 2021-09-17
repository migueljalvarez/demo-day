import React from "react";
import {
  Colors,
  Container,
  SuperContainer,
  Wrapper,
} from "../assets/styles/style";
import ServicesCard from "../components/ServicesCard";
import SearchService from "../components/SearchService";
import { useSelector } from "react-redux";
const properties = {
  containerMain: {
    direction: "column",
  },
  containerButton: {
    justifyContent: "space-around",
  },
  containerCard: {
    justifyContent: "center",
    padding: "10px 0px",
  },
  button: {
    background: Colors.accentColor,
    color: Colors.textPrimaryColor,
    width: "40%",
  },
};

const Services = () => {

  const services = useSelector(state => state.services)

  return (
    <>
      <SuperContainer>
        <Wrapper>
          <Container direction={properties.containerMain.direction}>
          <SearchService />
            <Container
              justifyContent={properties.containerCard.justifyContent}
              padding={properties.containerCard.padding}
              direction={"column"}
              alignItems={"center"}
            >
              {
                services.map((service) =>(
                  <ServicesCard key={service._id} service={service} info={true}/>
                ))
              }
              
            </Container>
          </Container>
        </Wrapper>
      </SuperContainer>
    </>
  );
};

export default Services;
