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
  Colors,
  ContainerTitleH1,
} from "../assets/styles/style";
import Avatar from "../components/Avatar";
import { FaPen, FaTools, FaUser } from "react-icons/fa";
const cover = "https://fondosmil.com/fondo/9856.jpg";

const Profile = () => {
  const user = useSelector((state) => state.auth);
  return (
    <SuperContainer>
      <Wrapper justifyContent="center">
        <Container>
          <Container
            width="80%"
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
                height="250px"
                radius="5px 5px 0px 0px"
                margin="0"
              />
            </Container>
            <Container direction="column" position="absolute" padding="0px">
              <Avatar
                user={user}
                position="static"
                width="150px"
                margin="-80px 0px 10px 10px"
                border={`${Colors.dividerColor} 1px solid`}
                self="flex-start"
              />
              <Container justifyContent="flex-end" padding="0px">
                <ContainerText
                  margin="5px"
                  position="static"
                  margin="-73px 6px 0px 0px"
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
                <ContainerTitle margin="5px 0px 5px 10px" align="left">
                  Acerca de
                </ContainerTitle>
                <Paragraph margin="5px 0px 5px 10px" align="left">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum neque omnis blanditiis officia dolorem ullam enim
                  aut porro mollitia voluptate vero ipsum, nisi consequatur
                  fugiat culpa voluptatibus quo eius animi.
                </Paragraph>
              </Container>
            </Container>
          </Container>
          <Container
            width="250px"
            direction="column"
            radius="5px"
            padding="0px"
            boxShadow="0px 8px 16px 0px rgba(0, 0, 0, 0.2)"
            margin="0px 0px 0px 20px"
          >
            <ContainerTitle margin="10px 0px 0px 10px" align="left">
              Informacion General
            </ContainerTitle>
            <Divider />
            <Container justifyContent="space-between">
              <ContainerText align="left" margin="0px 10px">
                Visualizaciones
              </ContainerText>
              <ContainerText margin="0px 15px" color={Colors.accentColor}>
                0
              </ContainerText>
            </Container>
            <Container justifyContent="space-between">
              <ContainerText align="left" margin="0px 10px">
                Recomentaciones
              </ContainerText>
              <ContainerText margin="0px 15px" color={Colors.accentColor}>
                0
              </ContainerText>
            </Container>
            <Container justifyContent="space-between">
              <ContainerText align="left" margin="0px 10px">
                Servicios Realizados
              </ContainerText>
              <ContainerText margin="0px 15px" color={Colors.accentColor}>
                0
              </ContainerText>
            </Container>
          </Container>
        </Container>
      </Wrapper>
    </SuperContainer>
  );
};

export default Profile;
