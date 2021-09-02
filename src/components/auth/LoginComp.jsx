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
  Input,
  Button,
  Span,
  Hr,
} from "../../assets/styles/style.js";

//IMPORTACION DE IMAGENES
import LogoPrueba from "../../assets/img/PruebaEmpresa.jpg";

//IMPORTACION DE ACCIONES
import { loginFacebook, loginGoogle, startLoginEmailPassword } from "../../redux/actions/authActions.js";

const prop = {
  containerLogin: {
    width: "calc(50% - 5px)",
    display: "inline-block",
    padding: "80px 0 30px 0",
  },
  form: {
    width: "70%",
    margin: "auto",
    padding: "80px 50px 30px 50px",
    borderRadius: "10px",
  },
  containerImg: {
    width: "100px",
    heigth: "100px",
    position: "absolute",
    top: "-50px",
    left: "calc(50% - 50px)",
  },

  img: {
    border: "3px solid" + Colors.defaultPrimaryColor,
    borderRadius: "50%",
    margin: "0",
  },
  containerInput: {
    flexWrap: "wrap",
    margin: "0 auto 1rem auto",
  },
  label: {
    margin: "0 auto 10px auto",
  },
  input: {
    borderRadius: "7px",
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
      dispatch(startLoginEmailPassword(email, password))
    }
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
    <Container
      padding={prop.containerLogin.padding}
      display={prop.containerLogin.display}
      width={prop.containerLogin.width}
    >
      <Form
        width={prop.form.width}
        margin={prop.form.margin}
        padding={prop.form.padding}
        borderRadius={prop.form.borderRadius}
        onSubmit={formik.handleSubmit}
        method="POST"
      >
        <Container
          width={prop.containerImg.width}
          height={prop.containerImg.heigth}
          position={prop.containerImg.position}
          top={prop.containerImg.top}
          left={prop.containerImg.left}
        >
          <Img
            border={prop.img.border}
            radius={prop.img.borderRadius}
            margin={prop.img.margin}
            width="100%"
            src={LogoPrueba}
            alt="logo"
          />
        </Container>

        <Container flexWrap={prop.containerInput.flexWrap}>
          <Label margin={prop.label.margin} htmlFor="email">
            Correo electronico
          </Label>
          <Input
            margin={prop.input.margin}
            padding={prop.input.padding}
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
          <Container margin={prop.error.margin} color={prop.error.color}>
            {formik.errors.email}
          </Container>
        ) : null}

        <Container
          margin={prop.containerInput.margin}
          flexWrap={prop.containerInput.flexWrap}
        >
          <Label margin={prop.label.margin} htmlFor="password">
            Contraseña
          </Label>
          <Input
            margin={prop.input.margin}
            padding={prop.input.padding}
            radius={prop.input.borderRadius}
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.password && formik.errors.password ? (
            <Container margin={prop.error.margin} color={prop.error.color}>
              {formik.errors.password}
            </Container>
          ) : null}
        </Container>

        <Container>
          <Button
            margin={prop.button.margin}
            fontSize={prop.button.fontSize}
            padding={prop.button.padding}
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

        <Container>
          <Button
            margin={prop.button.margin}
            fontSize={prop.button.fontSize}
            padding={prop.button.padding}
            border={prop.button.border}
            borderRadius={prop.button.borderRadius}
            width={prop.buttonGoogle.width}
            background={prop.buttonGoogle.backgrounColor}
            color={prop.buttonGoogle.color}
            type="submit"
            onClick={handleGoogleLogin}
          >
            <FcGoogle />
            <Span margin={prop.mSpan}>Ingresa con Google</Span>
          </Button>
        </Container>

        <Container>
          <Button
            margin={prop.button.margin}
            fontSize={prop.button.fontSize}
            padding={prop.button.padding}
            border={prop.button.border}
            borderRadius={prop.button.borderRadius}
            width={prop.buttonFacebook.width}
            background={prop.buttonFacebook.backgrounColor}
            color={prop.buttonFacebook.color}
            type="submit"
            onClick={handleFacebookLogin}
          >
            <GrFacebookOption />
            <Span margin={prop.span.margin}>Ingresa con Facebook</Span>
          </Button>
        </Container>

        <Container ustifyContent={prop.containerLink.justifyContent}>
          <Link to="/">Aún no te has registrado</Link>
        </Container>
      </Form>
    </Container>
  );
};

export default LoginComp;
