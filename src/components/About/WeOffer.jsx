import React from 'react';
import { SuperContainer, Container, Paragraph, Colors, Wrapper, Heading, Column } from '../../assets/styles/style';


const properties = {

  Heading: {
    margin: "20px 10px 10px 80px",
    color: "black",
  },

  Paragraph: {
    align: "justify",
    color: "black",
  },
  Column: {
    width: "32.5%",
  },
  SuperContainer: {
    background: Colors.defaultPrimaryColor,
  }

};

const WeOffer = () => {
  return (

    <SuperContainer
      background={properties.SuperContainer.background}>
      <Wrapper>
        <Container direction={"Column"} >
          <Heading
            color={properties.Heading.color}>
            Más allá de ofrecer, brindamos un espacio para el crecimiento profesional</Heading>
          <Container >
            <Column
              width={properties.Column.width}
              style={{ margin: "10px 0px 20px 7px" }}>
              <Paragraph
                color={properties.Paragraph.color}>
                La situación de migración es una realidad que ya está incorporada en el país, lo que conlleva a una necesidad de obtener un empleo
                formal que permita alcanzar una calidad de vida.
              </Paragraph>

            </Column>
            <Column
              width={properties.Column.width}
              style={{ margin: "10px 0px 20px 10px" }}>
              <Paragraph
                color={properties.Paragraph.color}>
                La situación de migración es una realidad que ya está incorporada en el país, lo que conlleva a una necesidad de obtener un empleo
                formal que permita alcanzar una calidad de vida.
              </Paragraph>
            </Column>
            <Column
              width={properties.Column.width}
              style={{ margin: "10px 5px 20px 10px" }}>
              <Paragraph
                color={properties.Paragraph.color}>
                La situación de migración es una realidad que ya está incorporada en el país, lo que conlleva a una necesidad de obtener un empleo
                formal que permita alcanzar una calidad de vida.
              </Paragraph>
            </Column>


          </Container>
        </Container>
      </Wrapper>
    </SuperContainer>


  );
}

export default WeOffer;