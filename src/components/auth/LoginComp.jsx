import React from "react";
import { Link } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";

import {
  Container,
  Img,
  Form,
  Colors,
  Label,
  InputForm,
  ButtonForm,
  Span,
  Hr,
} from "../../assets/styles/style.js";
import LogoPrueba from "../../assets/img/PruebaEmpresa.jpg";

const prop = {
  width: "calc(50% - 5px)",
  display: "inline-block",
  wform: "70%",
  mform: "auto",
  pdform: "80px 50px 30px 50px",
  brform: "10px",
  wCImg: "100px",
  hCImg: "100px",
  posCImg: "absolute",
  topCImg: "-50px",
  leftCImg: "calc(50% - 50px)",
  borderImg: "3px solid" + Colors.darkPrimaryColor,
  brImg: "50%",
  mimg: "0",
  fwCInp: "wrap",
  mCInp: "0 auto 1rem auto",
  mLabel: "0 auto 10px auto",
  brInput: "7px",
  mInput: "0 auto 10px auto",
  pdInput: "7px 2px",
  bcBtn: Colors.defaultPrimaryColor,
  bcBtnGoogle: Colors.textPrimaryColor,
  bcBtnFB: "#3B5998",
  cBtnGoogle: Colors.primaryTextColor,
  mbBtn: "1rem",
  mSpan: "0 1rem",
  jcCLink: 'center',
  mHr: "1rem 0",
};

const LoginComp = () => {
  return (
    <Container display={prop.display} width={prop.width}>
      <Form
        width={prop.wform}
        margin={prop.mform}
        padding={prop.pdform}
        borderRadius={prop.brform}
      >
        <Container
          width={prop.wCImg}
          height={prop.hCImg}
          position={prop.posCImg}
          top={prop.topCImg}
          left={prop.leftCImg}
        >
          <Img
            border={prop.borderImg}
            radius={prop.brImg}
            margin={prop.margin}
            width="100%"
            src={LogoPrueba}
            alt="logo"
          />
        </Container>

        <Container flexWrap={prop.fwCInp}>
          <Label label={prop.mLabel} htmlFor="email">
            Correo electronico
          </Label>
          <InputForm
            margin={prop.mInput}
            padding={prop.pdInput}
            radius={prop.brInput}
            type="text"
            name="email"
            id="email"
          />
        </Container>

        <Container margin={prop.mCInp} flexWrap={prop.fwCInp}>
          <Label label={prop.mLabel} htmlFor="password">
            Contraseña
          </Label>
          <InputForm
            margin={prop.mInput}
            padding={prop.pdInput}
            radius={prop.brInput}
            type="password"
            name="password"
            id="password"
          />
        </Container>

        <Container>
          <ButtonForm backgroundColor={prop.bcBtn} type="submit">
            Ingresar
          </ButtonForm>
        </Container>

        <Hr margin={prop.mHr} />

        <Container>
          <ButtonForm
            backgroundColor={prop.bcBtnGoogle}
            marginBottom={prop.mbBtn}
            color={prop.cBtnGoogle}
            type="submit"
          >
            <FcGoogle />
            <Span margin={prop.mSpan}>Ingresa con Google</Span>
          </ButtonForm>
        </Container>

        <Container>
          <ButtonForm
            backgroundColor={prop.bcBtnFB}
            marginBottom={prop.mbBtn}
            type="submit"
          >
            <GrFacebookOption />
            <Span margin={prop.mSpan}>Ingresa con Facebook</Span>
          </ButtonForm>
        </Container>

        <Container justifyContent={prop.jcCLink}>
          <Link to="/">Aún no te has registrado</Link>
        </Container>
      </Form>
    </Container>
  );
};

export default LoginComp;
