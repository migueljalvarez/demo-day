//IMPORTACION DE TERCEROS
import React from "react";
import { Link } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";


//IMPORTACION DE ESTILOS
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

//IMPORTACION DE IMAGENES
import LogoPrueba from "../../assets/img/PruebaEmpresa.jpg";

//IMPORTACION DE ACCIONES
import { loginFacebook, loginGoogle } from "../../redux/actions/authActions.js";

const prop = {
  width: "calc(50% - 5px)",
  padding: "80px 0 30px 0",
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
  mError: "0 auto 1rem auto",
  cError: Colors.darkPrimaryColor,
  brInput: "7px",
  mInput: "0 auto 10px auto",
  pdInput: "10px 20px",
  bcBtn: Colors.defaultPrimaryColor,
  bcBtnGoogle: Colors.textPrimaryColor,
  bcBtnFB: "#3B5998",
  cBtnGoogle: Colors.primaryTextColor,
  mbBtn: "1rem",
  mSpan: "0 1rem",
  jcCLink: "center",
  mHr: "1rem 0",
};

const LoginComp = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email requerido"),
      password: Yup.string()
        .min(8, "La contraseña es muy corta - debe tener minimo 8 caracteres.")
        .matches(
          /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S/,
          "La contraseña debe tener un numero, una mayuscula y un minuscula."
        )
        .required("Escribe tu contraseña."),
    }),
    onSubmit: () => {
      console.log("Hola");
      console.log("Hola");
      console.log("Hola");
      console.log("Hola");
      console.log("Hola");
    },
  });

  const { email, password } = formik.values;

  const handleGoogleLogin = () => {
    // console.log('google');
    dispatch(loginGoogle());
  };
  const handleFacebookLogin = () => {
    // console.log('facebook');
    dispatch(loginFacebook());
  };

  return (
    <Container padding={prop.padding} display={prop.display} width={prop.width}>
      <Form
        onSubmit={formik.onSubmit}
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
            value={email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Container>

        {formik.touched.email && formik.errors.email ? (
          <Container margin={prop.mError} color={prop.cError}>
            {formik.errors.email}
          </Container>
        ) : null}

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
            value={password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.password && formik.errors.password ? (
            <Container margin={prop.mError} color={prop.cError}>
              {formik.errors.password}
            </Container>
          ) : null}
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
            onClick={handleGoogleLogin}
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
            onClick={handleFacebookLogin}
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
