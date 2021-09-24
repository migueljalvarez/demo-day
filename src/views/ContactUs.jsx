//IMPORTACION DE TERCEROS
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

//IMPORTACION DE ESTILOS
import {
  Container,
  Form,
  Colors,
  Label,
  Input,
  Button,
  SuperContainer,
  Wrapper,
  TextArea,
} from "../assets/styles/style";
import ContactUsComp from "../components/ContactUsComp";

const prop = {
  containerLogin: {
    width: "calc(50% - 5px)",
    display: "flex",
    padding: "80px 0 30px 0",
    margin: "0 0 297px 0",
  },
  containerForm: {
    width: "70%",
    margin: "auto",
    padding: "80px 50px 30px 50px",
    radius: "5px",
    background: Colors.defaultPrimaryColor,
  },
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
    borderRadius: "5px",
    margin: "0 auto 10px auto",
    padding: "10px 20px",
  },
  textArea:{
    borderRadius: "5px",
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
};

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      tellUs: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Nombre requerido"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email requerido"),
      tellUs: Yup.string()
        .max(500, "No debes exceder los 500 caracteres")
        .required("Dinos tu motivo"),
    }),
    onSubmit: () => {},
  });

  const { name, email, tellUs } = formik.values;

  return (
    <SuperContainer>
      <Wrapper>
        <Container>
          <ContactUsComp />

          <Container
            padding={prop.containerLogin.padding}
            display={prop.containerLogin.display}
            width={prop.containerLogin.width}
            margin={prop.containerLogin.margin}
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
                  <Label margin={prop.label.margin} htmlFor="name">
                    Nombre
                  </Label>
                  <Input
                    margin={prop.input.margin}
                    // padding={prop.input.padding}
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
                  <Container
                    margin={prop.error.margin}
                    color={prop.error.color}
                  >
                    {formik.errors.name}
                  </Container>
                ) : null}

                <Container
                  margin={prop.containerInput.margin}
                  flexWrap={prop.containerInput.flexWrap}
                >
                  <Label margin={prop.label.margin} htmlFor="email">
                    Email
                  </Label>
                  <Input
                    width={prop.input.width}
                    margin={prop.input.margin}
                    // padding={prop.input.padding}
                    radius={prop.input.borderRadius}
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  {formik.touched.email && formik.errors.email ? (
                    <Container
                      margin={prop.error.margin}
                      color={prop.error.color}
                    >
                      {formik.errors.email}
                    </Container>
                  ) : null}
                </Container>

                <Container
                  margin={prop.containerInput.margin}
                  flexWrap={prop.containerInput.flexWrap}
                >
                  <Label margin={prop.label.margin} htmlFor="tellUs">
                    Cuentanos
                  </Label>
                  <TextArea
                    radius={prop.textArea.borderRadius}
                    name="tellUs"
                    id="tellUs"
                    value={tellUs}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></TextArea>

                  <Container justifyContent={"flex-end"}>
                    {formik.values.tellUs.length}/500
                  </Container>

                  {formik.touched.tellUs && formik.errors.tellUs ? (
                    <Container
                      margin={prop.error.margin}
                      color={prop.error.color}
                    >
                      {formik.errors.tellUs}
                    </Container>
                  ) : null}
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
                    Enviar
                  </Button>
                </Container>
              </Form>
            </Container>
          </Container>
        </Container>
      </Wrapper>
    </SuperContainer>
  );
};

export default ContactUs;
