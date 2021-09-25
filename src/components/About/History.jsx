import React from 'react';
import { Colors, Container, Paragraph, SuperContainer, Wrapper, Heading, Hr } from '../../assets/styles/style';
const properties = {


    Heading: {
        color: Colors.primaryTextColor,
        margin: "40px 20px 0px 40px",

    },
    Paragraph: {
        margin: "0px 20px 20px 40px ",
        align: "justify",
        position: "absolute",
        color: Colors.primaryTextColor,
    },
    Img: {
        width: "300px",
        height: "300px",
        position: "absolute",
        margin: "50px"
    },

    Hr: {
        width: "60%",
        margin: "5px auto",
    }
}

const History = () => {
    return (
        <SuperContainer>
            <Wrapper>
                <Container
                    direction={"column"}
                    style={{ bottom: "0px" }}>
                    <Container>
                        <Heading
                            color={properties.Heading.color}
                            style={{ margin: "0px auto", width: "60%", textAlign: "center", fontSize: "30px" }}>
                            Ser profesional, no es tener un titulo, es saber lo que estás haciendo.
                        </Heading>
                        <Hr
                            width={properties.Hr.width}
                            margin={properties.Hr.margin}
                            style={{ background: Colors.secondaryTextColor, height: "5px" }} />
                        <Paragraph
                            style={{ width: "60%", margin: "10px auto", textAlign: "justify", fontSize: "20px" }}
                            color={properties.Paragraph.color}>
                            La situación de migración es una realidad que ya está incorporada en el país, lo que conlleva a una necesidad de obtener un empleo
                            formal que permita alcanzar una calidad de vida. Pero se ha visto que durante los ultimos años se ha intensificado las exigencias
                            de tener un titulo universitario por parte de las empresas para clasificar como nuevo empleado de la misma, independientemente si
                            los conocimientos y habilidades son acordes al puesto vacante.
                        </Paragraph>
                        <Paragraph
                            style={{ width: "60%", margin: "10px auto", textAlign: "justify", fontSize: "20px" }}
                            color={properties.Paragraph.color}>
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

export default History;