import React from "react";
// import { useSelector } from "react-redux";
import {
  Colors,
  Container,
  Img,
  Paragraph,
  ContainerTitleH1,
} from "../assets/styles/style";
const cover = "https://fondosmil.com/fondo/9856.jpg";
const ServicesCard = () => {
  // const user = useSelector((state) => state.auth);

  return (
    <Container
      width={"350px"}
      padding={"0px"}
      direction={"column"}
      background={Colors.dividerColor}
      radius="8px"
      shadow={"0px 8px 16px 0px rgba(0, 0, 0, 0.2)"}
    >
      <Container padding={"0px"} width={"100%"}>
        <Img
          src={cover}
          alt={"cover"}
          width={"100%"}
          height={"150px"}
          margin={"0px"}
          radius={"8px 8px 0px 0px"}
        />
      </Container>
      <Container
        padding={"0px"}
        background={Colors.textPrimaryColor}
        direction={"column"}
      >
        <Container
          width={"350px"}
          padding={"0px"}
          //   position={"absolute"}
          justifyContent={"center"}
        >
          <ContainerTitleH1 margin="0px 10px" align="left" >
            Title
          </ContainerTitleH1>
        </Container>
        <Container padding={"5px"} width={"100%"} height={"250px"}>
          <Paragraph align="left" margin="0px 10px">
            Service description
          </Paragraph>
        </Container>
      </Container>
    </Container>
  );
};

export default ServicesCard;
