import React from 'react'
import { Button, Colors, Container, ContainerTitleH1, Form, Img, Input, Label, SelectBox, SuperContainer, TextArea, Wrapper } from '../assets/styles/style'

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
        width: "50%",
        margin: "4px",
        direction: "column"
    },
};

const AddServices = () => {
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
                            border={properties.form.border}>
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
                                        />
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
                                            radius={"8px"}
                                        />
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
                                        <Img
                                            src={cover}
                                            width="100%"
                                        />
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
                                        <SelectBox name="category"
                                            padding={"4px"}
                                        >
                                            <option value="0">ELEMENT</option>
                                            <option value="0">ELEMENT</option>
                                            <option value="0">ELEMENT</option>
                                            <option value="0">ELEMENT</option>
                                            <option value="0">ELEMENT</option>
                                        </SelectBox>
                                    </Container>
                                </Container>
                            </Container>

                            <Container
                                justifyContent={properties.containerButton.justifyContent}>
                                <Button
                                    margin={properties.button.margin}
                                >Cancelar</Button>
                                <Button 
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
