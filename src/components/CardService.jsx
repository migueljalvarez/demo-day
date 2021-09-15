import React from "react";
// import { useSelector } from "react-redux";
import {
  Colors,
  Container,
  Img,
  Paragraph,
  ContainerTitle,
} from "../assets/styles/style";

const CardService = ({ service }) => {
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
      <Container padding={"0px"} width={"100%"} justifyContent={"center"}>
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
          <ContainerTitle margin="0px 10px" align="left" >
            {service.title}
          </ContainerTitle>
        </Container>
        <Container padding={"5px"} width={"100%"} height="130px">
          <Paragraph align="center" margin="0px 10px">
            {service.description}
          </Paragraph>
        </Container>
      </Container>
    </Container>
  );
};

export default CardService;