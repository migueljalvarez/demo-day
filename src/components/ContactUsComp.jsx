import React from "react";

import {
  Container,
  ContainerText,
  ContainerTitleH1,
  Img,
} from "../assets/styles/style";

import ContactUs from "../assets/img/ContactUs.jpg";

const PROP = {
  containerTextContactUs: {
    display: "inline-block",
    width: "calc(50% - 5px)",
    margin: "80px 0 0 0",
  },
  h1: {
    margin: "20px 0 ",
  },
  text: {
    margin: "20px 0 ",
  },
  Img: {
    width: "100%",
  },
};

const ContactUsComp = () => {
  return (
    <Container
      display={PROP.containerTextContactUs.display}
      width={PROP.containerTextContactUs.width}
      margin={PROP.containerTextContactUs.margin}
    >
      <ContainerTitleH1 margin={PROP.h1.margin}>
        Contactenos
      </ContainerTitleH1>
      <ContainerText margin={PROP.text.margin}>
        Aquí podras enviarnos todas tus dudas
      </ContainerText>
      <Img width={PROP.Img.width} src={ContactUs} alt="Logo" />
    </Container>
  );
};

export default ContactUsComp;
