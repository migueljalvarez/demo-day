import React from "react";
import Avatar from "./Avatar";
import {
  Container,
  Img,
  Paragraph,
  Colors,
  ContainerTitleH1,
} from "../assets/styles/style";
const cover = "https://fondosmil.com/fondo/9856.jpg";

const Card = ({ user }) => {
  return (
    <>
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
          <Container width={"350px"} padding={"0px"} justifyContent={"center"}>
            <Avatar
              src={user}
              position={"static"}
              margin={"-80px 0px 0px 0px"}
              radius={"100%"}
              width="120px"
              border={`${Colors.dividerColor} 1px solid`}
            />
            <ContainerTitleH1 margin="0px 10px" align="left">
              {user.displayName}
            </ContainerTitleH1>
          </Container>
          <Container padding={"5px"} width={"100%"} height={"250px"}>
            <Paragraph align="left" margin="0px 10px">
              {user.description}
            </Paragraph>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default Card;
