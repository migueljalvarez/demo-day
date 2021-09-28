import React from "react";
import {
  SuperContainer,
  Container,
  Paragraph,
  Colors,
  Wrapper,
  Heading,
  Column,
  Icon,
  Hr,
} from "../../assets/styles/style";
import { RiUserStarFill, RiContactsFill } from "react-icons/ri";
import { HiCursorClick, HiUserGroup } from "react-icons/hi";

const properties = {
  Heading: {
    margin: "50px auto 10px auto",
    color: "black",
  },

  Paragraph: {
    align: "justify",
    color: "black",
    margin: "10px auto",
  },
  Column: {
    width: "20%",
  },
  Container: {
    margin: "10px auto",
    justifyContent: "center",
  },
  Hr: {
    width: "60%",
    margin: "5px auto",
  },
};

const Benefits = () => {
  return (
    <SuperContainer>
      <Wrapper>
        <Container direction={"Column"}>
          <Heading
            color={properties.Heading.color}
            margin={properties.Heading.margin}
            style={{ textAlign: "center", width: "60%", fontSize: "30px" }}
          >
            Las pequeñas cosas hacen una gran diferencia.
          </Heading>
          <Hr
            width={properties.Hr.width}
            margin={properties.Hr.margin}
            style={{ background: Colors.secondaryTextColor, height: "5px" }}
          />
          <Container
            margin={properties.Container.margin}
            justifyContent={properties.Container.justifyContent}
          >
            <Column
              width={properties.Column.width}
              style={{
                margin: "10px 0 20px 7px",
                border: "solid 1px",
                borderColor: Colors.accentColor,
                borderRadius: "20px",
              }}
            >
              <Icon
                style={{
                  background: Colors.accentColor,
                  height: "70px",
                  border: "solid 1px",
                  borderColor: "transparent",
                  borderRadius: "20px 20px 0px 0px",
                  textAlign: "center",
                }}
              >
                <RiUserStarFill
                  style={{
                    color: Colors.textPrimaryColor,
                    width: "70px",
                    height: "70px",
                  }}
                />
              </Icon>
              <Heading
                style={{
                  background: Colors.accentColor,
                  margin: "0",
                  textAlign: "center",
                }}
              >
                Valor
              </Heading>
              <Paragraph
                color={properties.Paragraph.color}
                align={properties.Paragraph.align}
                margin={properties.Paragraph.margin}
                width={"90%"}
              >
                Ofrecemos ese apoyo a las personas con conocimientos para
                ofrecer sus servicios profesionalmente y crecer de manera
                autonoma. Dandole ese valor a las personas que se merecen.
              </Paragraph>
            </Column>

            <Column
              width={properties.Column.width}
              style={{
                margin: "10px 0 20px 40px",
                border: "solid 1px",
                borderColor: Colors.accentColor,
                borderRadius: "20px",
              }}
            >
              <Icon
                style={{
                  background: Colors.accentColor,
                  height: "70px",
                  border: "solid 1px",
                  borderColor: "transparent",
                  borderRadius: "20px 20px 0px 0px",
                  textAlign: "center",
                }}
              >
                <HiCursorClick
                  style={{
                    color: Colors.textPrimaryColor,
                    width: "70px",
                    height: "70px",
                  }}
                />
              </Icon>

              <Heading
                style={{
                  background: Colors.accentColor,
                  margin: "0px",
                  textAlign: "center",
                }}
              >
                Rápido
              </Heading>
              <Paragraph
                color={properties.Paragraph.color}
                align={properties.Paragraph.align}
                margin={properties.Paragraph.margin}
                width={"90%"}
              >
                Para agregar un servicio solo se necesita crear el servicio,
                publicarlo y ya, la navegación por la plataforma es muy sencilla
                y rápida de usar.
              </Paragraph>
            </Column>

            <Column
              width={properties.Column.width}
              display={properties.Column.display}
              style={{
                margin: "10px 0 20px 40px",
                border: "solid 1px",
                borderColor: Colors.accentColor,
                borderRadius: "20px",
              }}
            >
              <Icon
                style={{
                  background: Colors.accentColor,
                  height: "70px",
                  border: "solid 1px",
                  borderColor: "transparent",
                  borderRadius: "20px 20px 0px 0px",
                  textAlign: "center",
                }}
              >
                <RiContactsFill
                  style={{
                    color: Colors.textPrimaryColor,
                    width: "70px",
                    height: "70px",
                  }}
                />
              </Icon>

              <Heading
                style={{
                  background: Colors.accentColor,
                  margin: "0px",
                  textAlign: "center",
                }}
              >
                Contacto
              </Heading>
              <Paragraph
                color={properties.Paragraph.color}
                align={properties.Paragraph.align}
                margin={properties.Paragraph.margin}
                width={"90%"}
              >
                Ofrecemos un contacto directo con los prestadores de servicios,
                generando un mayor control al no contar con un intermediario.
                directa, sin intermediario.
              </Paragraph>
            </Column>

            <Column
              width={properties.Column.width}
              display={properties.Column.display}
              style={{
                margin: "10px 0 20px 40px",
                border: "solid 1px",
                borderColor: Colors.accentColor,
                borderRadius: "20px",
              }}
            >
              <Icon
                style={{
                  background: Colors.accentColor,
                  height: "70px",
                  border: "solid 1px",
                  borderColor: "transparent",
                  borderRadius: "20px 20px 0px 0px",
                  textAlign: "center",
                }}
              >
                <HiUserGroup
                  style={{
                    color: Colors.textPrimaryColor,
                    width: "70px",
                    height: "70px",
                  }}
                />
              </Icon>
              <Heading
                style={{
                  background: Colors.accentColor,
                  margin: "0",
                  textAlign: "center",
                }}
              >
                Crowdsourcing
              </Heading>
              <Paragraph
                color={properties.Paragraph.color}
                align={properties.Paragraph.align}
                margin={properties.Paragraph.margin}
                style={{ width: "90%" }}
              >
                Acudimos a la estrategia Crowdsourcing, aprendiendo así
                del usuario e implementar ese aprendizaje.
              </Paragraph>
            </Column>
          </Container>
        </Container>
      </Wrapper>
    </SuperContainer>
  );
};

export default Benefits;
