import React from "react";
import Avatar from "./Avatar";
import {
  Button,
  Container,
  Img,
  Paragraph,
  Colors,
  ContainerTitle,
  ContainerSubTitle,
} from "../assets/styles/style";
import { useHistory } from "react-router-dom";
import StarComponent from "./StarComponent";
const cover = "https://fondosmil.com/fondo/9856.jpg";

const Card = ({ user }) => {
  const history = useHistory();
  const handleGoToProfile = () => {
    history.push(`/profile/${user._id}`);
  };

  const displayed = user?.displayName?.split(" ");
  if (displayed?.length > 2) {
    user.displayName = `${displayed[0]} ${displayed[2]}`;
  }

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
      <Container padding={"0px"} width={"100%"}>
        <Img
          src={user.coverUrl || cover}
          alt={"cover"}
          width={"100%"}
          height={"120px"}
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
        <Container padding={"0px"} justifyContent={"center"}>
          <Avatar
            imageUrl={user.imageUrl}
            name={user.displayName}
            position={"static"}
            margin={"-55px 0px 0px 0px"}
            radius={"100%"}
            width="100px"
            height="100px"
            border={`${Colors.dividerColor} 1px solid`}
          />
          <ContainerTitle margin="0px 10px" align="left">
            {user.displayName}
          </ContainerTitle>
          <ContainerSubTitle margin="0px 10px" align="left">
            {user.occupation}
          </ContainerSubTitle>
        </Container>
        <StarComponent active={false}/>
        <Container padding={"5px"} width={"100%"} height="130px">
          <Paragraph align="center" margin="0px 10px">
            {user.about.slice(0, 140)}...
          </Paragraph>
        </Container>
        <Container padding={"15px"}>
          <Button
            background={Colors.accentColor}
            color={Colors.textPrimaryColor}
            margin="15px 0"
            onClick={handleGoToProfile}
            width="100%"
          >
            Ver
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default Card;
