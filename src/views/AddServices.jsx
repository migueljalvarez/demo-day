import React from 'react'
import {
    Button,
    Colors,
    Container,
    ContainerTitleH1,
    Form,
    Img,
    Input,
    Label,
    Option,
    Select,
    SuperContainer,
    TextArea,
    Wrapper
} from '../assets/styles/style'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { categories } from '../helpers/categories';
const cover = "https://fondosmil.com/fondo/9856.jpg";

const properties = {
    containerMain: {
        direction: "column",
        width: "100%",
    },
    containerTitle: {
        width: "600px",
        height: "60px",
        radius: "0px 0px 20px 20px",
        background: Colors.lightPrimaryColor,
        justifyContent: "center",
        alignItems: "center",
    },
    containerButton: {
        justifyContent: "flex-end"
    },
    button: {
        background: Colors.accentColor,
        color: Colors.textPrimaryColor,
        width: "40%",
        margin: "4px",
    },
    containerInput: {
        flexWrap: "wrap",
        margin: "0 auto 1rem auto",
    },
    form: {
        direction: "row",
        width: "100%",
        backgroundColor: "white",
        border: "none",
    },
    formGroup: {
        display: "flex",
        direction: "column",
        margin: "8px 0px",
    },
    containerInForm: {
        width: "45%",
        margin: "4px",
        direction: "column"
    },
};

const AddServices = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            category: "",
            imageUrl: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, "El nombre es muy corto")
                .required("Escribe un nombre para el servicio"),
            description: Yup.string()
                .min(4, "La descripción es muy corta")
                .required("Escribe una descripción de tu servicio"),

        }),
        onSubmit: (data) => {
            console.log(data)
        }


    })
    const { name, description, category } = formik.values
    return (
        <SuperContainer
            padding={"0px 4px 4px 4px"}>
            <Wrapper>
                <Container
                    direction={properties.containerMain.direction}>
                    <Container
                        width={properties.containerTitle.width}
                        height={properties.containerTitle.height}
                        radius={properties.containerTitle.radius}
                        background={properties.containerTitle.background}
                        justifyContent={properties.containerTitle.justifyContent}
                        alignItems={properties.containerTitle.alignItems}
                    >
                        <ContainerTitleH1>Añadir servicios</ContainerTitleH1>
                    </Container>
                    <Wrapper>
                        <Form
                            direction={properties.form.direction}
                            width={properties.form.width}
                            backgroundColor={properties.form.backgroundColor}
                            border={properties.form.border}
                            onSubmit={formik.handleSubmit}
                        >
                            <Container
                                width={properties.containerMain.width}
                            >
                                <Container
                                    width={properties.containerInForm.width}
                                    margin={properties.containerInForm.margin}
                                    direction={properties.containerInForm.direction}
                                >
                                    <Container
                                        flexWrap={properties.containerInput.flexWrap}
                                        display={properties.formGroup.display}
                                        direction={properties.formGroup.direction}
                                        margin={properties.formGroup.margin}
                                    >
                                        <Label
                                            htmlFor="name"
                                            color={"black"}
                                        >
                                            Nombre del servicio
                                        </Label>
                                        <Input
                                            border={"2px solid black"}
                                            radius={"8px"}
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={name}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />

                                        {formik.touched.name && formik.errors.name ? (
                                            <Container margin={"10px"} color={Colors.darkPrimaryColor}>
                                                {formik.errors.name}
                                            </Container>
                                        ) : null}
                                    </Container>
                                    <Container
                                        flexWrap={properties.containerInput.flexWrap}
                                        display={properties.formGroup.display}
                                        direction={properties.formGroup.direction}
                                        margin={properties.formGroup.margin}
                                    >
                                        <Label
                                            htmlFor="name"
                                            color={"black"}
                                        >
                                            Descripción del servicio
                                        </Label>
                                        <TextArea
                                            border={"1px solid black"}
                                            radius={"8px"}
                                            id="description"
                                            name="description"
                                            value={description}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />

                                        {formik.touched.description && formik.errors.description ? (
                                            <Container margin={"10px"} color={Colors.darkPrimaryColor}>
                                                {formik.errors.description}
                                            </Container>
                                        ) : null}
                                    </Container>
                                </Container>
                                <Container
                                    width={properties.containerInForm.width}
                                    margin={properties.containerInForm.margin}
                                    direction={properties.containerInForm.direction}
                                >
                                    <Container
                                        flexWrap={properties.containerInput.flexWrap}
                                        display={properties.formGroup.display}
                                        direction={properties.formGroup.direction}
                                        margin={properties.formGroup.margin}
                                    >
                                        <Label
                                            color={"black"}
                                        >
                                            Imagén del servicio
                                        </Label>
                                        <Container
                                            width="100%"
                                            height="300px"
                                            justifyContent="center">
                                            <Img
                                                src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"

                                                style={{ objectFit: "cover" }}
                                            />
                                        </Container>

                                    </Container>
                                    <Container
                                        flexWrap={properties.containerInput.flexWrap}
                                        display={properties.formGroup.display}
                                        direction={properties.formGroup.direction}
                                        margin={properties.formGroup.margin}
                                    >
                                        <Label
                                            color={"black"}
                                        >Categoria</Label>
                                        <Select
                                            name="category"
                                            padding={"4px"}
                                            border={"1px solid black"}
                                            radius={"8px"}
                                            id="category"
                                            value={category}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        >
                                            <Option value="" selected="selected" disabled>
                                                Selecciona la categoria de tu servicio
                                            </Option>
                                            {categories.map((d, i) => (
                                                <Option key={i} value={d.id}>
                                                    {d.type}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Container>
                                </Container>
                            </Container>

                            <Container
                                justifyContent={properties.containerButton.justifyContent}>
                                <Button
                                    type="reset"
                                    onClick={formik.resetForm}
                                    margin={properties.button.margin}
                                >Cancelar</Button>
                                <Button
                                    type="submit"
                                    margin={properties.button.margin}
                                    background={properties.button.background}>Guardar</Button>
                            </Container>
                        </Form>
                    </Wrapper>
                </Container>
            </Wrapper>
        </SuperContainer>
    )
}

export default AddServices
