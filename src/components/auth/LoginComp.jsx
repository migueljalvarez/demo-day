import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";

import { 
    ContainerLogin,
    Form,
    ImgHeader,
    ContainerInput,
    ContainerBtn,
    Label,
    Input,
    BtnLogin,
    Hr,
    BtnGoogle,
    BtnFacebook,
    Span,
    LinkAuth,
    Link,
 } from "../../assets/styles/auth-styles.js";
import LogoPrueba from "../../assets/img/PruebaEmpresa.jpg";

const LoginComp = () => {
  return (
    <ContainerLogin>
      <Form>
        <ImgHeader>
          <img src={LogoPrueba} alt="logo" />
        </ImgHeader>

        <ContainerInput>
          <Label htmlFor="email">Correo electronico</Label>
          <Input type="text" name="email" id="email" />
        </ContainerInput>

        <ContainerInput>
          <Label htmlFor="password">
            Contraseña
          </Label>
          <Input type="password" name="password" id="password" />
        </ContainerInput>

        <ContainerBtn>
          <BtnLogin type="submit">
            Ingresar
          </BtnLogin>
        </ContainerBtn>

        <Hr />

        <ContainerBtn>
          <BtnGoogle type="submit">
            <FcGoogle />
            <Span>Ingresa con Google</Span>
          </BtnGoogle>
        </ContainerBtn>

        <ContainerBtn>
          <BtnFacebook type="submit">
            <GrFacebookOption />
            <Span>Ingresa con Facebook</Span>
          </BtnFacebook>
        </ContainerBtn>

        <LinkAuth>
          <Link href="/">Aún no te has registrado</Link>
        </LinkAuth>
      </Form>
    </ContainerLogin>
  );
};

export default LoginComp;
