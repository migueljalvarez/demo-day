//IMPORTACION DE TERCEROS
import React, { useState } from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import ImgAuth from "../components/auth/ImgAuth";

//IMPORTACION DE ESTILOS
import {
  Container,
  Form,
  Colors,
  Label,
  Input,
  Button,
  Span,
  Hr,
  SuperContainer,
  Wrapper,
  LINK,
} from "../assets/styles/style";

//IMPORTACION DE ACCIONES
import {
  loginFacebook,
  loginGoogle,
  startLoginEmailPassword,
} from "../redux/actions/authActions.js";

const prop = {
  containerComp: {
    alignItems: "center",
  },
  containerLogin: {
    width: "calc(50% - 5px)",
    display: "flex",
    padding: "80px 0 30px 0",
  },
  containerForm: {
    width: "70%",
    margin: "auto",
    padding: "80px 50px 30px 50px",
    radius: "5px",
    background: Colors.defaultPrimaryColor,
  },
  form: {},
  formGroup: {
    display: "flex",
    direction: "column",
  },

  containerInput: {
    flexWrap: "wrap",
    margin: "0 auto 1rem auto",
  },
  label: {
    width: "95%",
    margin: "0 auto 10px auto",
  },
  input: {
    width: "5%",
    borderRadius: "5px",
    margin: "0 auto 10px auto",
    padding: "10px 20px",
  },
  containerInputPassword: {
    flexWrap: "wrap",
    margin: "0 auto 1rem auto",
  },
  inputPassword: {
    width: "90%",
    borderRadius: "5px 0 0 5px",
    margin: "0 auto 10px auto",
    padding: "10px 20px",
  },
  iconPassword: {
    width: "10%",
    height: "38px",
    justifyContent: "center",
    alignItems: "center",
    background: Colors.textPrimaryColor,
    borderRadius: "0 5px 5px 0",
    color: Colors.dividerColor,
  },
  containerRemember: {
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto 1rem auto",
  },
  labelRemember: {
    width: "95%",
    margin: "0 auto 10px auto",
    padding: "0 1rem",
    textAlign: "end",
  },
  inputRemember: {
    width: "5%",
    borderRadius: "5px",
    margin: "0 auto 10px auto",
    padding: "10px 20px",
  },
  error: {
    margin: "0 auto 1rem auto",
    color: "#f60000",
  },
  button: {
    margin: "0 0 1rem 0",
    fontSize: "0.9rem",
    padding: "0.75rem 1rem",
    border: "none",
    borderRadius: "7px",
  },
  buttonLogin: {
    width: "100%",
    backgrounColor: Colors.accentColor,
    color: Colors.textPrimaryColor,
  },
  buttonGoogle: {
    width: "100%",
    backgrounColor: Colors.textPrimaryColor,
    color: Colors.primaryTextColor,
  },
  buttonFacebook: {
    width: "100%",
    backgrounColor: "#3B5998",
    color: Colors.textPrimaryColor,
  },
  span: {
    margin: "0 1rem",
  },
  containerLink: {
    justifyContent: "center",
  },
  hr: {
    margin: "0 0 1rem 0",
  },
};

const LoginComp = () => {
  const [mostrar, setMostrar] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remenber: true,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email requerido"),
      password: Yup.string()
        .min(8, "La contraseña es muy corta - debe tener minimo 8 caracteres.")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\w*\W*]/,
          "La contraseña debe tener un numero, una mayuscula y un minuscula."
        )
        .required("Escribe tu contraseña."),
    }),
    onSubmit: () => {
      dispatch(startLoginEmailPassword(email, password, remenber));
    },
  });

  const { email, password, remenber } = formik.values;

  const handleGoogleLogin = () => {
    dispatch(loginGoogle());
  };
  const handleFacebookLogin = () => {
    dispatch(loginFacebook());
  };
  const mostrarContraseña = () => {
    if (mostrar === false) {
      setMostrar(true);
    } else {
      setMostrar(false);
    }
  };

  return (
    <SuperContainer>
      <Wrapper>
        <Container alignItems={prop.containerComp.alignItems}>
          <Container
            padding={prop.containerLogin.padding}
            display={prop.containerLogin.display}
            width={prop.containerLogin.width}
          >
            <Container
              width={prop.containerForm.width}
              background={prop.containerForm.background}
              margin={prop.containerForm.margin}
              padding={prop.containerForm.padding}
              radius={prop.containerForm.radius}
            >
              <Form onSubmit={formik.handleSubmit} method="POST">
                <Container
                  flexWrap={prop.containerInput.flexWrap}
                  display={prop.formGroup.display}
                  direction={prop.formGroup.direction}
                >
                  <Label margin={prop.label.margin} htmlFor="email">
                    Correo electronico
                  </Label>
                  <Input
                    margin={prop.input.margin}
                    // padding={prop.input.padding}
                    radius={prop.input.borderRadius}
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </Container>

                {formik.touched.email && formik.errors.email ? (
                  <Container
                    margin={prop.error.margin}
                    color={prop.error.color}
                  >
                    {formik.errors.email}
                  </Container>
                ) : null}

                <Container
                  margin={prop.containerInputPassword.margin}
                  flexWrap={prop.containerInputPassword.flexWrap}
                >
                  <Label margin={prop.label.margin} htmlFor="password">
                    Contraseña
                  </Label>
                  <Input
                    width={prop.inputPassword.width}
                    margin={prop.inputPassword.margin}
                    // padding={prop.inputPassword.padding}
                    radius={prop.inputPassword.borderRadius}
                    type={mostrar ? "text" : "password"}
                    name="password"
                    id="password"
                    value={password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <Container
                    width={prop.iconPassword.width}
                    height={prop.iconPassword.height}
                    justifyContent={prop.iconPassword.justifyContent}
                    alignItems={prop.iconPassword.alignItems}
                    background={prop.iconPassword.background}
                    radius={prop.iconPassword.borderRadius}
                    color={prop.iconPassword.color}
                    onClick={mostrarContraseña}
                  >
                    {mostrar ? (
                      <BsFillEyeFill color="black" />
                    ) : (
                      <BsFillEyeSlashFill />
                    )}
                  </Container>

                  {formik.touched.password && formik.errors.password ? (
                    <Container
                      margin={prop.error.margin}
                      color={prop.error.color}
                    >
                      {formik.errors.password}
                    </Container>
                  ) : null}
                </Container>

                <Container
                  margin={prop.containerRemember.margin}
                  flexWrap={prop.containerRemember.flexWrap}
                  justifyContent={prop.containerRemember.justifyContent}
                  alignItems={prop.containerRemember.alignItems}
                >
                  <Label
                    width={prop.labelRemember.width}
                    padding={prop.labelRemember.padding}
                    textAlign={prop.labelRemember.textAlign}
                    htmlFor="remenber"
                  >
                    Recuerdame
                  </Label>
                  <Input
                    width={prop.inputRemember.width}
                    padding={prop.inputRemember.padding}
                    radius={prop.inputRemember.borderRadius}
                    type="checkbox"
                    name="remenber"
                    id="remenber"
                    value={remenber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </Container>

                <Container>
                  <Button
                    margin={prop.button.margin}
                    fontSize={prop.button.fontSize}
                    // padding={prop.button.padding}
                    border={prop.button.border}
                    borderRadius={prop.button.borderRadius}
                    width={prop.buttonLogin.width}
                    background={prop.buttonLogin.backgrounColor}
                    color={prop.buttonLogin.color}
                    type="submit"
                  >
                    Ingresar
                  </Button>
                </Container>

                <Hr margin={prop.hr.margin} />
              </Form>

              <Container
                display={prop.formGroup.display}
                direction={prop.formGroup.direction}
              >
                <Button
                  margin={prop.button.margin}
                  fontSize={prop.button.fontSize}
                  // padding={prop.button.padding}
                  border={prop.button.border}
                  borderRadius={prop.button.borderRadius}
                  width={prop.buttonGoogle.width}
                  background={prop.buttonGoogle.backgrounColor}
                  color={prop.buttonGoogle.color}
                  onClick={handleGoogleLogin}
                >
                  <FcGoogle />
                  <Span margin={prop.span.margin}>Ingresa con Google</Span>
                </Button>

                <Button
                  margin={prop.button.margin}
                  fontSize={prop.button.fontSize}
                  // padding={prop.button.padding}
                  border={prop.button.border}
                  borderRadius={prop.button.borderRadius}
                  width={prop.buttonFacebook.width}
                  background={prop.buttonFacebook.backgrounColor}
                  color={prop.buttonFacebook.color}
                  onClick={handleFacebookLogin}
                >
                  <GrFacebookOption />
                  <Span margin={prop.span.margin}>Ingresa con Facebook</Span>
                </Button>
              </Container>
              <Container justifyContent={prop.containerLink.justifyContent}>
                <LINK to="/signup">Aún no te has registrado</LINK>
              </Container>
            </Container>
          </Container>
          <ImgAuth />
        </Container>
      </Wrapper>
    </SuperContainer>
  );
};

export default LoginComp;
