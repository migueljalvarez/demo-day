import React from "react";
import {
    Colors,
    Container,
    Paragraph,
    SuperContainer,
    Wrapper,
    Heading,
    Hr,
    Img,
    Column,
} from "../../assets/styles/style";
import Beneficio from "../../assets/img/beneficios.jpg";

const properties = {
    Heading: {
        color: Colors.primaryTextColor,
        margin: "40px 20px 0px 40px",
    },
    Paragraph: {
        margin: "auto ",
        align: "justify",
        position: "absolute",
        color: Colors.primaryTextColor,
    },
    Img: {
        width: "300px",
        height: "250px",
        margin: "15px auto"
    },

    Hr: {
        width: "60%",
        margin: "5px auto",
    },
    Column: {
        width: "70%",
    },
    Container: {
        margin: "auto",
    },
};

const History = () => {
    return (
        <SuperContainer>
            <Wrapper>
                <Container margin={properties.Container.margin}>
                    <Heading
                        color={properties.Heading.color}
                        style={{
                            margin: "50px auto 10px auto",
                            width: "92%",
                            textAlign: "center",
                            fontSize: "30px",
                        }}
                    >
                        Enfócate en lo que eres bueno y serás imparable.
                    </Heading>
                    <Hr
                        width={properties.Hr.width}
                        margin={properties.Hr.margin}
                        style={{ background: Colors.secondaryTextColor, height: "5px" }}
                    />
                    <Column width={properties.Column.width}>

                        <Paragraph
                            style={{
                                width: "90%",
                                textAlign: "justify",
                                fontSize: "20px",
                            }}
                            color={properties.Paragraph.color}
                            margin={properties.Paragraph.margin}
                        >
                            DOM Services va dirigidos a esas personas como Diego que tienen
                            conocimientos y habilidades pero que por ciertas circunstancia no
                            cuentan con un titulo universitario que acrediten sus actitudes,
                            dandole un espacio donde puedan dar a conocer sus servicios de una
                            manera profesional, al mismo tiempo brindandole el poder de
                            ampliar su red de trabajo, obtimizando su proceso de busqueda en
                            la busqueda de un trabajo de calidad.
                        </Paragraph>
                    </Column>
                    <Column width={"30%"}>
                        <Img
                            src={Beneficio}
                            width={properties.Img.width}
                            height={properties.Img.height}
                            margin={properties.Img.margin}
                        />
                    </Column>
                </Container>
            </Wrapper>
        </SuperContainer>
    );
};

export default History;
