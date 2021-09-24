import React from "react";
import { useHistory } from "react-router";
// import { useSelector } from "react-redux";
import {
  Colors,
  Container,
  Img,
  Paragraph,
  ContainerTitleH1,
  Button,
} from "../assets/styles/style";

const ServicesCard = ({ service, info }) => {
  const history = useHistory();
  const handleGoToService = () => {
    history.push(`/service/${service._id}`);
  };

  return (
    <Container
      width={"60%"}
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
          <ContainerTitleH1 margin="0px 10px" align={"center"} >
            {service.title}
          </ContainerTitleH1>
        </Container>

        <Container padding={"5px"} width={"100%"} height={"auto"} minHeight={"250px"}>
          <Paragraph align="left" margin="0px 10px">
            {service.description}
          </Paragraph>
        </Container>
        {
          info && (
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
          )
        }

      </Container>
    </Container>
  );
};

export default ServicesCard;


