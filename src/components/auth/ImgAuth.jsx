import React from "react";

import LogoPrueba from "../../assets/img/PruebaEmpresa.jpg";
import { ContainerImage } from "../../assets/styles/auth-styles";

const ImgAuth = () => {
  return (
    <ContainerImage>
      <img src={LogoPrueba} alt="Logo" />
    </ContainerImage>
  );
};

export default ImgAuth;
