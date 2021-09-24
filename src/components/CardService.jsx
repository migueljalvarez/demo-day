import React from "react";
import { useHistory } from "react-router";
// import { useSelector } from "react-redux";
import {
  Colors,
  Container,
  Img,
  Paragraph,
  ContainerTitle,
  Button,
} from "../assets/styles/style";

const CardService = ({ service }) => {
  const history = useHistory();
  const handleGoToService = () => {
    history.push(`/service/${service._id}`);
  };
  return (
    <Container
      width={"250px"}
      padding={"0px"}
      direction={"column"}
      margin={"10px"}
      background={Colors.dividerColor}
      radius="8px"
      shadow={"0px 8px 16px 0px rgba(0, 0, 0, 0.2)"}
      height="450px"
      flexWrap="nowrap"
    >
      <Container
        padding={"0px"}
        width={"100%"}
        justifyContent={"center"}
        height={"150px"}
        minHeight={"150px"}
        maxHeight={"150px"}
      >
        <Img
          src={service.imageUrl}
          alt={"cover"}
          margin={"0px"}
          radius={"8px 8px 0px 0px"}
        />
      </Container>
      <Container
        padding={"0px"}
        background={Colors.textPrimaryColor}
        direction={"column"}
        radius={"0px 0px 8px 8px"}
        height="100%"
      >
        <Container
          padding={"0px"} justifyContent={"center"}
        >
          <ContainerTitle
            margin="0px 10px"
            align="center"
          >
            {service.title}
          </ContainerTitle>
        </Container>
        <Container
          padding={"5px"}
          width={"100%"}
          height="130px"
        >
          <Paragraph align="center" margin="0px 10px">
            {service.description.slice(0, 140)}...
          </Paragraph>
        </Container>
        <Container padding={"15px"}>
          <Button
            background={Colors.accentColor}
            color={Colors.textPrimaryColor}
            margin="15px 0"
            onClick={handleGoToService}
            width="100%"
          >
            Más información
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default CardService;