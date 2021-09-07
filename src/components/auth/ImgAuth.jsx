import React from "react";

import LogoPrueba from "../../assets/img/PruebaEmpresa.jpg";

import { 
  Container, 
  Img
 } from "../../assets/styles/style.js";



const prop = {
  display: "inline-block",
  width: "calc(50% - 5px)",
  wImg:'100%'
}

const ImgAuth = () => {
  return (
    <Container display={prop.display} width={prop.width}>
      <Img width={prop.wImg} src={LogoPrueba} alt="Logo" />
    </Container>
  );
};

export default ImgAuth;
