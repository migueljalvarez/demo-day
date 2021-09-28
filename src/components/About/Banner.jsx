import React from 'react';
import { Gradient } from 'react-gradient';
import { SuperContainer, Container, Img, Paragraph, Colors, Wrapper } from '../../assets/styles/style';
import Logo from "../../assets/svg/logo.svg";

const properties = {
  Img: {
    width: "300px",
    margin: "auto",
    float: "left"
  },
  Paragraph: {
    align: "center",
    color: Colors.primaryTextColor,
    margin: "20px",
  },

  Container: {
    height: "auto",
    width: "95%",
    margin: "40px 10px"
  }

};

const StartSteps = () => {
  return (

    <SuperContainer>
      <Wrapper>
        <Container
          height={properties.Container.height}>

          <Gradient
            gradients={[
              [Colors.dividerColor, Colors.darkPrimaryColor],
              [Colors.defaultPrimaryColor, Colors.lightPrimaryColor],
            ]}
            property="background"
            duration={3000}
            angle="30deg"
            transitionType="sequential"
            gradientType="radial"
          >
            <Container
              margin={properties.Container.margin}
              width={properties.Container.width}>
              <Img
                src={Logo}
                width={properties.Img.width}
                height={properties.Img.height}
                float={properties.Img.float}
                margin={properties.Img.margin}
              />

              <Paragraph
                align={properties.Paragraph.align}
                color={properties.Paragraph.color}
                style={{ fontSize: "30px", fontWeight: "bold", width: "70%", textAlign: "center" }}>
                Generamos un espacio para dar a conocer tus habilidades y conocimientos, para que crezcas laboralmente de manera independiente.
              </Paragraph>

            </Container>
          </Gradient>
        </Container>
      </Wrapper>
    </SuperContainer>


  );
}

export default StartSteps;