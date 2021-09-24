import React from 'react'
import { useDispatch, useSelector } from "react-redux";
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
import { departamento } from '../helpers/departamentos';
import { FileUpload } from '../helpers/FileUpload';
import { newService } from '../redux/actions/serviceActions';
import { useHistory } from 'react-router';

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
    const user = useSelector(state => state.auth)
    const categories = useSelector(state => state.categories)

    const history = useHistory()
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            category: "",
            location: "",
            imageUrl: "",
            user: user.id,
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .min(3, "El nombre es muy corto")
                .required("Escribe un nombre para el servicio"),
            description: Yup.string()
                .min(4, "La descripción es muy corta")
                .max(500, "La descripción es muy larga")
                .required("Escribe una descripción de tu servicio"),

        }),
        onSubmit: async (data) => {
            await dispatch(newService(data))
            history.push("/services")
        }


    })
    const { title, description, category, location } = formik.values

    const handleInputChangeFile = (e) => {
        const file = e.target.files[0];
        FileUpload(file)
            .then((response) => {
                console.log(response)
                formik.values.imageUrl = response
                document.getElementById("imageService").setAttribute("src", response)
            })
            .catch((error) => {
                throw error;
            });
    };



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
                                            htmlFor="title"
                                            color={"black"}
                                        >
                                            Nombre del servicio
                                        </Label>
                                        <Input
                                            border={"2px solid black"}
                                            radius={"8px"}
                                            type="text"
                                            name="title"
                                            id="title"
                                            value={title}
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
                                        <Container justifyContent={"flex-end"}>
                                            {formik.values.description.length}/500
                                        </Container>

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
                                            Imagen del servicio
                                        </Label>
                                        <Container
                                            width="100%"
                                            height="300px"
                                            justifyContent="center">
                                            <Img
                                                cursor={"pointer"}
                                                id="imageService"
                                                src={formik.values.imageUrl || "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"}
                                                style={{ objectFit: "cover" }}
                                                onClick={() => document.getElementById("imageSelect").click()}
                                            />
                                            <input
                                                id="imageSelect"
                                                type="file"
                                                name="file"
                                                accept="image/*"
                                                style={{ display: "none" }}
                                                onChange={handleInputChangeFile}
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
                                            {/* <Option value="" selected disabled>
                                                Selecciona la categoria de tu servicio
                                            </Option> */}
                                            {categories.map((d, i) => (
                                                <Option key={i} value={d.name}>
                                                    {d.name}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Container>
                                    <Container
                                        flexWrap={properties.containerInput.flexWrap}
                                        display={properties.formGroup.display}
                                        direction={properties.formGroup.direction}
                                        margin={properties.formGroup.margin}
                                    >
                                        <Label
                                            color={"black"}
                                        >Lugar</Label>
                                        <Select
                                            name="location"
                                            padding={"4px"}
                                            border={"1px solid black"}
                                            radius={"8px"}
                                            id="location"
                                            value={location}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        >
                                            {/* <Option value="" selected disabled>
                                                Selecciona el lugar donde ofreceras
                                            </Option> */}
                                            {departamento.map((d, i) => (
                                                <Option key={i} value={d.id}>
                                                    {d.depart}
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
                                    color={Colors.textPrimaryColor}
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
