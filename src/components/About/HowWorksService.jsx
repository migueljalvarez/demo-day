import React from 'react';
import {Colors, Container, Heading, Paragraph, Column, Img, SuperContainer, Wrapper} from '../../assets/styles/style';
const image = "https://static.vecteezy.com/system/resources/previews/002/536/223/non_2x/light-blue-layout-with-lines-rectangles-rectangles-with-colorful-gradient-on-abstract-background-modern-template-for-your-landing-page-vector.jpg"
const properties = {
    
    Column: {
        width: "630px",
    },
    Heading: {
       color: Colors.primaryTextColor,
       margin: "30px auto",
       
        },
    Paragraph: {
        margin: "40px",
        align: "justify"
        },
    Img: {
        width: "300px",
        height: "300px",
        position: "relative",
        margin: "50px"
    }
}

const HowWorks =() =>{
    return (
        <SuperContainer>
            <Wrapper>
<Container direction={"column"}>
    <Container>
        <Column
    width={properties.Column.width}>
    <Heading
    color={properties.Heading.color}
    margin={properties.Heading.margin}
    >
        ¿Comó funciona DOM Services?
    </Heading>
    <Paragraph
    margin={properties.Paragraph.margin}
    align={properties.Paragraph.align}
    style={{fontSize:"25px"}}>
    A diferencias de otras plataformas, DOM Services se enfoca en los conocimientos 
    que tienen las personas y no solo en las certificaciones que avalen dichos conocimientos;
    aquí podrás publicar tus servicios de una manera rápida y sencilla.
    </Paragraph>
    </Column>
    <Column width={properties.Column.width}>
    <Img 
    src={image}
    width={properties.Img.width}
    height={properties.Img.height}
    position={properties.Img.position}
    margin={properties.Img.margin} />
    </Column>
</Container>
<Container >
   <Column
    width={properties.Column.width}>
     <Heading
        color={properties.Heading.color}
        margin={properties.Heading.margin}
        >¿Cómo nacío DOM Services?
    </Heading>
    <Paragraph
         margin={properties.Paragraph.margin}
         align={properties.Paragraph.align}
         style={{fontSize:"25px"}}
        >
        Cada año se dificulta la posibilidad de conseguir un empleo, ya que cada vez el empleador es más
        exigente con las certificaciones del futuro trabajador que avalen sus conocimientos. Este fue 
        el principal motivo, por la cual nacio DOM Services, porqué creemos en el valor de las personas.
        </Paragraph>
     </Column>  
    <Column width={properties.Column.width}>    
<Img 
    src={image}
    width={properties.Img.width}
    height={properties.Img.height}
    position={properties.Img.position}
    margin={properties.Img.margin}
    style={{float: "left"}}
     />
     </Column>
</Container>
</Container>
</Wrapper>
</SuperContainer>
    );
}

export default HowWorks;