import React from 'react';
import { SuperContainer, Container, Img, Paragraph, Colors, Wrapper, Heading } from '../../assets/styles/style';
import Banner from "../../assets/img/technology.jpg";

const properties = {

  Heading: {
    margin: "80px 10px 10px 80px",
    color: Colors.primaryTextColor,
  },
  Img: {
    with: "200px",
    height: "200px",
    margin: "20px",
  },
  Paragraph: {
    align: "justify",
    color: Colors.primaryTextColor,
    position: "relative",
    margin: "5px 5px 5px 80px"
  },
  SuperContainer: {
    height: "450px",
  }

};

const StartSteps = () => {
  return (

    <SuperContainer
      height={properties.SuperContainer.height}>
      <Wrapper>
        <Container direction={"Column"}>
          <Container>
            <Img
              src={Banner}
              width={"100%"}
              height={"400px"}
            />
            <Heading
              margin={properties.Heading.margin}
              style={{ fontSize: "35px", position: "relative", top: "-50%", width: "60%" }}
            >
              DOM Services
            </Heading>
            <Paragraph
              margin={properties.Paragraph.margin}
              align={properties.Paragraph.align}
              color={properties.Paragraph.color}
              style={{ fontSize: "25px", position: "relative", top: "-50%", fontWeight: "bold", width: "60%" }}>
              Generamos un espacio para dar a conocer tus habilidades y conocimientos, para que crezcas laboralmente de manera independiente.
            </Paragraph>
          </Container>
        </Container>
      </Wrapper>
    </SuperContainer>


  );
}

export default StartSteps;