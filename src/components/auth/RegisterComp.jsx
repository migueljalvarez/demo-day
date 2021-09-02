import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import {
  Container,
  Img,
  Form,
  Colors,
  Label,
  Input,
  Button,
  Hr,
} from "../../assets/styles/style.js";
import LogoPrueba from "../../assets/img/PruebaEmpresa.jpg";

import { startUploadingImage, startRegisterWithEmailPasswordNameUrlImg } from "../../redux/actions/authActions.js";

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
  buttonCargarImg: {
    width: "35%",
    backgrounColor: Colors.accentColor,
    color: Colors.textPrimaryColor,
  },
  containerLink: {
    justifyContent: "center",
  },
  hr: {
    margin: "0 0 1rem 0",
  },
};

const RegisterComp = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password2: "",
      urlImg: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "El nombre es muy corto")
        .required("Escribe nombre de la pelicula."),
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
      password2: Yup.string()
        .oneOf([Yup.ref("password"), null], "Las contraseñas deben ser iguales")
        .required("Escribe tu contraseña."),
      urlImg: Yup.string().url().required("URL requerido"),
    }),
    onSubmit: () => {
      dispatch(startRegisterWithEmailPasswordNameUrlImg(email, password, name, urlImg));
    },
  });

  const { name, email, password, password2, urlImg } = formik.values;

  // CARGAR IMAGEN
  const handleClickFile = () => {
    document.querySelector("#fileSelector").click();
  };
  const handleFileChange = async (e) => {
    // console.log(e);
    const file = e.target.files[0];
    // console.log(file);
    if (file) {
      let fileURL = await dispatch(startUploadingImage(file));
      let urlImg = document.querySelector("#urlImg");
      urlImg.value = fileURL;
      formik.values.urlImg = fileURL;
    }
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
          <Label margin={prop.label.margin} htmlFor="name">
            Nombre Completo
          </Label>
          <Input
            margin={prop.input.margin}
            padding={prop.input.padding}
            radius={prop.input.borderRadius}
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Container>

        {formik.touched.name && formik.errors.name ? (
          <Container margin={prop.error.margin} color={prop.error.color}>
            {formik.errors.name}
          </Container>
        ) : null}

        <Container flexWrap={prop.containerInput.flexWrap}>
          <Label margin={prop.label.margin} htmlFor="email">
            Correo
          </Label>
          <Input
            margin={prop.input.margin}
            padding={prop.input.padding}
            radius={prop.input.borderRadius}
            type="email"
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

        <Container flexWrap={prop.containerInput.flexWrap}>
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
        </Container>

        {formik.touched.password && formik.errors.password ? (
          <Container margin={prop.error.margin} color={prop.error.color}>
            {formik.errors.password}
          </Container>
        ) : null}

        <Container flexWrap={prop.containerInput.flexWrap}>
          <Label margin={prop.label.margin} htmlFor="password2">
            Confirma tu contraseña
          </Label>
          <Input
            margin={prop.input.margin}
            padding={prop.input.padding}
            radius={prop.input.borderRadius}
            type="password"
            name="password2"
            id="password2"
            value={password2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Container>

        {formik.touched.password2 && formik.errors.password2 ? (
          <Container margin={prop.error.margin} color={prop.error.color}>
            {formik.errors.password2}
          </Container>
        ) : null}

        <Container
          margin={prop.containerInput.margin}
          flexWrap={prop.containerInput.flexWrap}
        >
          <Label margin={prop.label.margin} htmlFor="floatingPassword">
            Url imagen
          </Label>

          <Input
            margin={prop.input.margin}
            padding={prop.input.padding}
            radius={prop.input.borderRadius}
            type="url"
            id="urlImg"
            placeholder="Url"
            name="urlImg"
            value={urlImg}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled
            required
          />

          <input
            id="fileSelector"
            type="file"
            name="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <Container>
            <Button
              margin={prop.button.margin}
              fontSize={prop.button.fontSize}
              padding={prop.button.padding}
              border={prop.button.border}
              borderRadius={prop.button.borderRadius}
              width={prop.buttonCargarImg.width}
              background={prop.buttonCargarImg.backgrounColor}
              color={prop.buttonCargarImg.color}
              type="submit"
              value="Picture"
              onClick={handleClickFile}
            >
              Imagen
            </Button>
          </Container>
        </Container>

        {formik.touched.urlImg && formik.errors.urlImg ? (
          <Container margin={prop.error.margin} color={prop.error.color}>
            {formik.errors.urlImg}
          </Container>
        ) : null}

        <Container></Container>

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
          Registrar
        </Button>

        <Hr margin={prop.hr.margin} />

        <Container justifyContent={prop.containerLink.justifyContent}>
          <Link to="/">Ya estas registrado</Link>
        </Container>
      </Form>
    </Container>
  );
};

export default RegisterComp;
