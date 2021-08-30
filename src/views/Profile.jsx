import React from "react";
import { useSelector } from "react-redux";
import {
  Container,
  ContainerText,
  ContainerTitle,
  ContainerSubTitle,
  Divider,
  Img,
  SuperContainer,
  Wrapper,
  Paragraph,
  Colors
} from "../assets/styles/style";
import Avatar from "../components/Avatar";
import { FaPen } from "react-icons/fa";
const cover = "https://fondosmil.com/fondo/9856.jpg";

const Profile = () => {
  const user = useSelector((state) => state.auth);
  return (
    <SuperContainer>
      <Wrapper>
        <Container
          width="300px"
          direction="column"
          radius="5px"
          padding="0px"
          boxShadow="0px 8px 16px 0px rgba(0, 0, 0, 0.2)"
        >
          <Container padding="0px">
            <Img
              className="cover"
              src={cover}
              alt="cover"
              width="100%"
              height="150px"
              radius="5px 5px 0px 0px"
              margin="0"
            />
          </Container>
          <Container direction="column" position="absolute" padding="0px">
            <Avatar
              user={user}
              position="static"
              width="80px"
              margin="-44px 0px 10px 10px"
              border="#ddd 1px solid"
              self="flex-start"
            />
            <Container justifyContent="flex-end" padding="0px">
              <ContainerText
                margin="5px"
                position="static"
                margin="-42px 6px 0px 0px"
              >
                <FaPen />
              </ContainerText>
            </Container>
            <Container direction="column" padding="0px">
              <ContainerTitle margin="0px 10px" align="left">
                {user.name}
              </ContainerTitle>
              <ContainerSubTitle align="left" margin="0px 10px">
                Oficio
              </ContainerSubTitle>
              <Paragraph align="left" margin="2px 10px">
                Medellin, Antioquia
              </Paragraph>
              <Divider />
              <Container padding="0px" justifyContent="space-between">
                <ContainerText align="left" margin="10px">
                  Visualizaciones
                </ContainerText>
                <ContainerText margin="10px" color={Colors.accentColor}>
                  0
                </ContainerText>
              </Container>
            </Container>
          </Container>
        </Container>
      </Wrapper>
    </SuperContainer>
  );
};

export default Profile;
