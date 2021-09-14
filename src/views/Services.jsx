import React from "react";
import {
  Button,
  Colors,
  Container,
  SuperContainer,
  Wrapper,
} from "../assets/styles/style";
import ServicesCard from "../components/ServicesCard";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  const handleAddService = () => {
    history.push("/services/add");
  };

  return (
    <>
      <SuperContainer>
        <Wrapper>
          <Container direction={properties.containerMain.direction}>
            <Container
              justifyContent={properties.containerButton.justifyContent}
            >
              <Button
                width={properties.button.width}
                background={properties.button.background}
                color={properties.button.color}
                onClick={handleAddService}
              >
                Añadir servicios
              </Button>
              <Button
                width={properties.button.width}
                background={properties.button.background}
                color={properties.button.color}
              >
                Buscar servicios
              </Button>
            </Container>
            <Container
              justifyContent={properties.containerCard.justifyContent}
              padding={properties.containerCard.padding}
            >
              <ServicesCard />
            </Container>
          </Container>
        </Wrapper>
      </SuperContainer>
    </>
  );
};

export default Services;
