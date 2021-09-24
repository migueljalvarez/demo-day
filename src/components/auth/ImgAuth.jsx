import React from "react";

import ImgAuth1 from "../../assets/img/ImgAuth.jpg";

import { 
  Container, 
  Img
 } from "../../assets/styles/style.js";



 const prop = {
  containerImg:{
  display: "inline-block",
  width: "calc(50% - 5px)",
  },
  img: {
    width:'100%',
  }
}

const ImgAuth = () => {
  return (
    <Container display={prop.containerImg.display} width={prop.containerImg.width}>
      <Img width={prop.img.width} src={ImgAuth1} alt="Logo"/>
    </Container>
  );
};

export default ImgAuth;
