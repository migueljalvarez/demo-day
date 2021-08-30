import React from "react";

import LogoPrueba from "../../assets/img/PruebaEmpresa.jpg";

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
  LinkAuth,
  Link,
} from "../../assets/styles/auth-styles.js";

const RegisterComp = () => {
  return (
    <ContainerLogin>
      <Form>
        <ImgHeader>
          <img src={LogoPrueba} alt="logo" />
        </ImgHeader>

        <ContainerInput>
          <Label htmlFor="name">Nombre Completo</Label>
          <Input type="text" name="name" id="name" />
        </ContainerInput>

        <ContainerInput>
          <Label htmlFor="lastName">
            Apellidos completos
          </Label>
          <Input type="text" name="lastName" id="lastName" />
        </ContainerInput>

        <ContainerInput>
          <Label htmlFor="email">
            Correo
          </Label>
          <Input type="email" name="email" id="email" />
        </ContainerInput>

        <ContainerInput>
          <Label htmlFor="password">
            Contraseña
          </Label>
          <Input type="password" name="password" id="password" />
        </ContainerInput>

        <ContainerInput>
          <Label htmlFor="password2">
            Confirma tu contraseña
          </Label>
          <Input type="password" name="password2" id="password2" />
        </ContainerInput>

        <ContainerBtn>
          <BtnLogin className="btn btn-login" type="submit">
            Registrar
          </BtnLogin>
        </ContainerBtn>

        <Hr />

        <LinkAuth>
          <Link href="/">Ya estas registrado</Link>
        </LinkAuth>
      </Form>
    </ContainerLogin>
  );
};

export default RegisterComp;
