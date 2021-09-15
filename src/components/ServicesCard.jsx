import React from "react";
// import { useSelector } from "react-redux";
import {
  Colors,
  Container,
  Img,
  Paragraph,
  ContainerTitleH1,
} from "../assets/styles/style";

const ServicesCard = ({service}) => {
  return (
    <Container
      width={"90%"}
      padding={"0px"}
      background={Colors.dividerColor}
      radius="8px"
      shadow={"0px 8px 16px 0px rgba(0, 0, 0, 0.2)"}
      margin={"10px"}
      flexWrap={"unset"}
    >
      <Container padding={"0px"} width={"30%"} height={"100%"}>
        <Img
          src={service.imageUrl}
          alt={"cover"}
          width={"100%"}
          margin={"0px"}
        />
      </Container>
      <Container
      width={"70%"}
        padding={"16px"}
        background={Colors.textPrimaryColor}
        direction={"row"}
      >
        <Container
          width={"100%"}
          padding={"0px"}
          justifyContent={"center"}
        >
          <ContainerTitleH1 margin="0px 10px" align="left" >
            {service.title}
          </ContainerTitleH1>
        </Container>
        
        <Container padding={"5px"} width={"100%"} height={"250px"}>
          <Paragraph align="left" margin="0px 10px">
            {service.description}
          </Paragraph>
        </Container>
      </Container>
    </Container>
  );
};

export default ServicesCard;


