import React from 'react';
import {Container, Button, Colors} from '../assets/styles/style';

const properties = {
    
      Button: {
        background: Colors.defaultPrimaryColor,
        fontSize: "1.5em",
        margin: "30px auto",
        width: "270px",
        
        },
      
  }

const ButtonAbout = () => {
    return (
        <Container>
    <Button
    background={properties.Button.background}
    radius={properties.Button.radius}
    fontSize={properties.Button.fontSize}
    margin={properties.Button.margin}
    width={properties.Button.width}
    style={{marginRight: "0px", borderRadius: "30px 0 0 30px", borderColor: "black"}}>
        Agregar Servicios
        </Button>
        <Button
    background={Colors.textPrimaryColor}
    fontSize={properties.Button.fontSize}
    margin={properties.Button.margin}
    borderWidth={properties.Button.borderWidth}
    width={properties.Button.width}
    style={{marginLeft: "0px", borderRadius: "0 30px 30px 0", borderColor: "black"}}>
        Contratar Servicios
        </Button>
    </Container>
    );
}

export default ButtonAbout;