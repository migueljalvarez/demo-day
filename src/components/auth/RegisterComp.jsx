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
  InputForm,
  ButtonForm,
  Hr,
} from "../../assets/styles/style.js";
import LogoPrueba from "../../assets/img/PruebaEmpresa.jpg";

import { startUploadingImage } from "../../redux/actions/authActions.js";

const prop = {
  width: "calc(50% - 5px)",
  display: "inline-block",
  padding: '80px 0 30px 0',
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
  cBtnGoogle: Colors.primaryTextColor,
  mbBtn: "1rem",
  wbtn: "35%",
  jcCLink: "center",
  mHr: "1rem 0",
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
        .oneOf(
          [Yup.ref("password"), null],
          "Las contraseñas deben ser iguales"
        )
        .required("Escribe tu contraseña."),
      urlImage: Yup.string().url().required("URL requerido"),
    }),
    onSubmit: () => {
      console.log("Hola");
      console.log("Hola");
      console.log("Hola");
      console.log("Hola");
      console.log("Hola");
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
    <Container padding={prop.padding} display={prop.display} width={prop.width}>
      <Form
        onSubmit={(e) =>{console.log('Holaaaaaa')}}
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
          <Label label={prop.mLabel} htmlFor="name">
            Nombre Completo
          </Label>
          <InputForm
            margin={prop.mInput}
            padding={prop.pdInput}
            radius={prop.brInput}
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Container>

        {formik.touched.name && formik.errors.name ? (
          <Container
            margin={prop.mError}
            color={prop.cError}
          >
            {formik.errors.name}
          </Container>
        ) : null}

        <Container flexWrap={prop.fwCInp}>
          <Label label={prop.mLabel} htmlFor="email">
            Correo
          </Label>
          <InputForm
            margin={prop.mInput}
            padding={prop.pdInput}
            radius={prop.brInput}
            type="email"
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

        <Container flexWrap={prop.fwCInp}>
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
        </Container>

        {formik.touched.password && formik.errors.password ? (
          <Container margin={prop.mError} color={prop.cError}>
            {formik.errors.password}
          </Container>
        ) : null}

        <Container flexWrap={prop.fwCInp}>
          <Label label={prop.mLabel} htmlFor="password2">
            Confirma tu contraseña
          </Label>
          <InputForm
            margin={prop.mInput}
            padding={prop.pdInput}
            radius={prop.brInput}
            type="password"
            name="password2"
            id="password2"
            value={password2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Container>

        {formik.touched.password2 && formik.errors.password2 ? (
          <Container margin={prop.mError} color={prop.cError}>
            {formik.errors.password2}
          </Container>
        ) : null}

        <Container margin={prop.mCInp} flexWrap={prop.fwCInp}>
          <Label label={prop.mLabel} htmlFor="floatingPassword">
            Url imagen
          </Label>

          <InputForm
            margin={prop.mInput}
            padding={prop.pdInput}
            radius={prop.brInput}
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
        </Container>

        <input
          id="fileSelector"
          type="file"
          name="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <Container>
          <ButtonForm
            width={"35%"}
            backgroundColor={prop.bcBtn}
            marginBottom={prop.mbBtn}
            color={prop.cBtn}
            type="submit"
            value="Picture"
            onClick={handleClickFile}
          >
            Selecciona imagen
          </ButtonForm>
        </Container>

        {formik.touched.urlImg && formik.errors.urlImg ? (
          <Container margin={prop.mError} color={prop.cError}>
            {formik.errors.urlImg}
          </Container>
        ) : null}

        <Container>
          
        </Container>

        <ButtonForm backgroundColor={prop.bcBtn} type="submit">
            Registrar
          </ButtonForm>

        <Hr margin={prop.mHr} />

        <Container justifyContent={prop.jcCLink}>
          <Link to="/">Ya estas registrado</Link>
        </Container>
      </Form>
    </Container>
  );
};

export default RegisterComp;
