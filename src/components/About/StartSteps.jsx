import React from 'react';
import {SuperContainer, Container,  Img, Column, Paragraph, Colors, Wrapper}  from '../../assets/styles/style';


const image = "https://media.istockphoto.com/vectors/no-image-signs-for-web-page-vector-id529239795?k=20&m=529239795&s=612x612&w=0&h=E6cwdkeHEqhyvFPLb0dQa-8oSYZMPVaqH6taGTRrDlg=";
const banner = "https://kinsta.com/es/wp-content/uploads/sites/8/2020/10/tipos-de-archivos-de-imagen.png"

const properties = {
    Column: {
        width: "380px",        
      },
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
      position:"fided",
    }

  };

const StartSteps = () => {
    return (
      
      <SuperContainer background={properties.SuperContainer.background}>
        <Wrapper>
        <Container direction={"Column"}>        
         <Container>
                           <Column
            width={properties.Column.width}
            style={{ margin: "30px" }}>
            <Paragraph
              style={{ fontWeight: "bold", fontSize: "20px" }}
              color={properties.Paragraph.color}>
              Registrate y completa tu perfil
            </Paragraph>
            <Paragraph
              align={properties.Paragraph.align}>
              Comienza por crear una cuenta y completando tu perfil, el cual contendrá toda
              la información necesaria para ser contratado.
            </Paragraph>
            <Img
              src={image}
              alt=""
              height={properties.Img.height}
              width={properties.Img.with}
              margin={properties.Img.margin} />
          </Column>
          <Column
            width={properties.Column.width}
            style={{ margin: "30px" }}>
            <Paragraph
              style={{ fontWeight: "bold", fontSize: "20px" }}
              color={properties.Paragraph.color}>
              Agrega un servicio
            </Paragraph>
            <Paragraph
              align={properties.Paragraph.align}>
              Podras agregar los servicios que quieres ofrecer, colocando una descripción de
              tu servicio, lugar y disponibilidad.
            </Paragraph>
            <Img
              src={image}
              alt=""
              height={properties.Img.height}
              width={properties.Img.with}
              margin={properties.Img.margin} />
          </Column>
          <Column
            width={properties.Column.width}
            style={{ margin: "30px" }}>
            <Paragraph
              style={{ fontWeight: "bold", fontSize: "20px" }}
              color={properties.Paragraph.color}>
              Recibe propuestas
            </Paragraph>
            <Paragraph
              align={properties.Paragraph.align}>
              Preparate para tener propuestas de contrato en poco tiempo, comenzando así
              a tener una vida laboral activa.
            </Paragraph>
            <Img
              src={image}
              alt=""
              height={properties.Img.height}
              width={properties.Img.with}
              margin={properties.Img.margin} />
          </Column>
          </Container>
         <Img
         src={banner} 
         width={"100%"}
         height={"300px"}
         position={""}/>
         </Container>
         </Wrapper>
        </SuperContainer>

  
    );
}

export default StartSteps;