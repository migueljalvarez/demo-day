import React from "react";

import {
  Button,
  Colors,
  Container,
  ContainerSubTitle,
  ContainerText,
  ContainerTitle,
  Img,
} from "../assets/styles/style";

import ImgTutorial from "../assets/img/Banner+tutorial.jpg";
import { useHistory } from "react-router";

const PROP = {
  containerTutorialDescription: {
    flexWrap: "wrap",
    padding: "20px",
    margin: "2rem 10px",
    background: Colors.defaultPrimaryColor,
  },
  TitleTutorial: {
    color: Colors.textPrimaryColor,
    margin: "1rem 0",
    fontWeight: "700",
  },
  containerDescription: {
    width: "100%",
    padding: "1.5rem 0",
    justifyContent: "space-around",
    alignItems: "initial",
  },
  containerImgDescription: {
    width: "calc(50% - 10px )",
  },
  containerTextDescription: {
    width: "calc(50% - 10px )",
    justifyContent: "center",
    alignItems: "center",
    color: Colors.textPrimaryColor,
  },
  containerSubtitleText: {
    width: "100%",
    align: "end",
    color: Colors.textPrimaryColor,
  },
  containerText: {
    width: "100%",
    align: "end",
    color: Colors.textPrimaryColor,
  },
  ContainerButton: {
    width: "100%",
    justifyContent: "flex-end",
  },
  button: {
    background: Colors.accentColor,
    color: Colors.textPrimaryColor,
  },
};

const TutorialOfferDescription = () => {

  const history = useHistory();

  const handleOffer = () => {
    history.push('/tutorialOffer');
  }
  const handleHire = () => {
    history.push('/tutorialHire');
  }

  return (
    <Container
      flexWrap={PROP.containerTutorialDescription.flexWrap}
      padding={PROP.containerTutorialDescription.padding}
      margin={PROP.containerTutorialDescription.margin}
      background={PROP.containerTutorialDescription.background}
    >
      <ContainerTitle
        margin={PROP.TitleTutorial.margin}
        fontWeight={PROP.TitleTutorial.fontWeight}
        color={PROP.TitleTutorial.color}
      >
        ¿Cómo Ofrezco o Contrato un Servicio?
      </ContainerTitle>
      <Container
        width={PROP.containerDescription.width}
        justifyContent={PROP.containerDescription.justifyContent}
        alignItems={PROP.containerDescription.alignItems}
        padding={PROP.containerDescription.padding}
      >
        <Container width={PROP.containerImgDescription.width}>
          <Img src={ImgTutorial} alt="imagen tutorial" width="100%" />
        </Container>
        <Container
          width={PROP.containerTextDescription.width}
          justifyContent={PROP.containerTextDescription.justifyContent}
          alignItems={PROP.containerTextDescription.alignItems}
          color={PROP.containerTextDescription.color}
        >
          <ContainerSubTitle
            width={PROP.containerSubtitleText.width}
            align={PROP.containerSubtitleText.align}
            color={PROP.containerSubtitleText.color}
          >
            ¿Cómo Ofrezco un Servicio?
          </ContainerSubTitle>

          <ContainerText
            width={PROP.containerText.width}
            align={PROP.containerText.align}
            color={PROP.containerText.color}
          >
            OFrecer un servicio es muy sencillo pulsa el boton y te explicaremos
            como puedes ofrecer un servicio
          </ContainerText>

          <Container
            width={PROP.ContainerButton.width}
            justifyContent={PROP.ContainerButton.justifyContent}
          >
            <Button
              background={PROP.button.background}
              color={PROP.button.color}
              onClick={handleOffer}
            >
              Ofrecer pulsa aqui
            </Button>
          </Container>

          <ContainerSubTitle
            width={PROP.containerSubtitleText.width}
            align={PROP.containerSubtitleText.align}
            color={PROP.containerSubtitleText.color}
          >
            ¿Cómo Contrato un Servicio?
          </ContainerSubTitle>

          <ContainerText
            width={PROP.containerText.width}
            align={PROP.containerText.align}
            color={PROP.containerText.color}
          >
            Contratar un servicio es muy sencillo pulsa el boton y te
            explicaremos como puedes contratar un servicio
          </ContainerText>

          <Container
            width={PROP.ContainerButton.width}
            justifyContent={PROP.ContainerButton.justifyContent}
          >
            <Button
              background={PROP.button.background}
              color={PROP.button.color}
              onClick={handleHire}
            >
              Contratar pulsa aqui
            </Button>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default TutorialOfferDescription;
