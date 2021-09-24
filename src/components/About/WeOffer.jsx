import React from 'react';
import { SuperContainer, Container, Img, Paragraph, Colors, Wrapper, Heading } from '../../assets/styles/style';
import Curva from "../../assets/img/curva.png";


const properties = {

  Heading: {
    margin: "80px 10px 10px 80px",
    color: Colors.primaryTextColor,
  },
  Img: {
    with: "100%",
    height: "500px",
  },
  Paragraph: {
    align: "justify",
    color: Colors.primaryTextColor,
    position: "relative",
  },
  Button: {
    background: Colors.textPrimaryColor,
    radius: "0px",
    fontSize: "1.5em",
    margin: "20px auto",
  },
  SuperContainer: {
    background: Colors.dividerColor,
  },
  Container: {
    position: "fided",
  }

};

const WeOffer = () => {
  return (

    <SuperContainer>
      <Wrapper>
        <Container direction={"Column"}>
          <Container>
            <Img
              src={Curva}
              width={properties.Img.with}
              height={properties.Img.height}
              position={""} />
            <Heading
              color={properties.Heading.color}
              margin={properties.Heading.margin}
              style={{ fontSize: "25px", position: "relative", top: "-50%", width: "60%" }}>
              Más allá de ofrecer, brindamos un espacio para el crecimiento profesional.
            </Heading>

            <Paragraph style={{ width: "50%", margin: "30px", textAlign: "justify", position: "relative", top: "-50%", fontWeight: "bold" }}>
              La situación de migración es una realidad que ya está incorporada en el país, lo que conlleva a una necesidad de obtener un empleo
              formal que permita alcanzar una calidad de vida. Pero se ha visto que durante los ultimos años se ha intensificado las exigencias
              de tener un titulo universitario por parte de las empresas para clasificar como nuevo empleado de la misma, independientemente si
              los conocimientos y habilidades son acordes al puesto vacante.
            </Paragraph>
            <Paragraph style={{ width: "50%", margin: "30px", textAlign: "justify", position: "relative", top: "-50%", fontWeight: "bold" }}>
              Esta experiencia sirvió para implementar una plataforma donde los usuarios que tienen conocimientos y habilidades pero que no cuentan
              con un titulo univeristario, tengan un espacio donde podrán publicar sus servicios de una manera rápida sin obstaculizar dicho porceso,
              dando oportunidad a los usuarios de expandir su red de contacto, logrando la meta de ser emprendedores e independientes.
            </Paragraph>

          </Container>
        </Container>
      </Wrapper>
    </SuperContainer>


  );
}

export default WeOffer;