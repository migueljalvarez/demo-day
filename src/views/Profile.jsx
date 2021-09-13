import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  ContainerText,
  ContainerTitle,
  ContainerSubTitle,
  Divider,
  Img,
  SuperContainer,
  Wrapper,
  Paragraph,
  Colors,
  Button,
  Form,
  Input,
  TextArea,
  Label,
  Select,
  Option,
} from "../assets/styles/style";
import Avatar from "../components/Avatar";
import { FaWhatsapp, FaUserEdit } from "react-icons/fa";
import { useParams } from "react-router-dom";
import actionProfile from "../redux/actions/userActions";
import { Modal } from "react-bootstrap";
import { useCustomFormik } from "../hooks/useCustomFormik";
import UI from "../redux/actions/uiActions";
const cover = "https://fondosmil.com/fondo/9856.jpg";

const properties = {
  input: {
    borderRadius: "5px",
    margin: "0 auto 10px auto",
    padding: "10px 20px",
    border: `2px solid ${Colors.secondaryTextColor}`,
  },
  button: {
    margin: "0 0 1rem 0",
    fontSize: "0.9rem",
    padding: "0.75rem 1rem",
    border: "none",
    borderRadius: "5px",
  },
  formGroup: {
    display: "flex",
    direction: "column",
  },
  buttonCargarImg: {
    width: "35%",
    backgrounColor: Colors.accentColor,
    color: Colors.textPrimaryColor,
    radius: "0 0.25rem 0.25rem 0",
    padding: "0.3rem 0.75rem",
  },
  inputImg: {
    radius: "0.25rem 0 0 0.25rem",
  },
};
const documentsType = [
  { value: "CC" },
  { value: "CE" },
  { value: "PA" },
  { value: "PEP" },
  { value: "OTHER" },
];
const Profile = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const modalShow = useSelector((state) => state.modal);
  let isDisabled = auth.id === 0 || params.id !== auth.id;

  // const [isLoading, setIsLoading] = useState(true);

  const initialValues = {
    id: user._id,
    name: user.name,
    lastname: user.lastname,
    about: user.about,
    address: user.address,
    documentNumber: user.documentNumber,
    documentType: user.documentType,
    imageUrl: user.imageUrl,
    coverUrl: user.coverUrl,
    location: user.location,
    occupation: user.occupation,
    phone: user.phone,
  };

  const [formik, values, handleInputChange, handleInputChangeFile] =
    useCustomFormik(initialValues, "updateProfile", user._id);

  const {
    name,
    lastname,
    about,
    occupation,
    location,
    address,
    imageUrl,
    phone,
    documentType,
    documentNumber,
  } = values;

  const handleImageProfile = () => {
    document.getElementById("imageProfile").click();
  };

  useEffect(() => {
    dispatch(actionProfile.findByid(params.id));
  }, [dispatch, params]);

  return (
    <div>
      <SuperContainer>
        <Wrapper justifyContent="center">
          <Container>
            <Container
              width="80%"
              direction="column"
              radius="5px"
              padding="0px"
              shadow="0px 8px 16px 0px rgba(0, 0, 0, 0.2)"
            >
              <Container padding="0px">
                <Img
                  className="cover"
                  src={cover}
                  alt="cover"
                  width="100%"
                  height="250px"
                  radius="5px 5px 0px 0px"
                  margin="0"
                />
              </Container>
              <Container direction="column" padding="0px">
                <Avatar
                  imageUrl={user.imageUrl}
                  name={user.name}
                  position="static"
                  width="150px"
                  margin="-80px 0px 10px 10px"
                  border={`${Colors.dividerColor} 1px solid`}
                  self="flex-start"
                />

                <Container direction="column" padding="0px">
                  <ContainerTitle margin="0px 10px" align="left">
                    {user.displayName}
                  </ContainerTitle>
                  <ContainerSubTitle align="left" margin="0px 10px">
                    {user.occupation}
                  </ContainerSubTitle>
                  <Paragraph align="left" margin="2px 10px">
                    {user.location}
                  </Paragraph>
                  <Container
                    justifyContent="flex-end"
                    padding="0px"
                    position="static"
                    margin="-46px 6px 0px -7px"
                  >
                    <Button
                      radius="0.25rem"
                      background={Colors.accentColor}
                      color={Colors.textPrimaryColor}
                      margin="5px"
                      disabled={isDisabled}
                      onClick={() => dispatch(UI.showModal())}
                    >
                      <FaUserEdit /> Editar
                    </Button>
                    <Button
                      radius="0.25rem"
                      background="#128C7E"
                      color={Colors.textPrimaryColor}
                      margin="5px"
                    >
                      <FaWhatsapp /> Contactar
                    </Button>
                  </Container>

                  <Divider />
                  <ContainerTitle margin="5px 0px 5px 10px" align="left">
                    Acerca de
                  </ContainerTitle>
                  <Paragraph margin="5px 0px 5px 10px" align="left">
                    {user.about}
                  </Paragraph>
                </Container>
              </Container>
            </Container>
            <Container
              width="250px"
              direction="column"
              radius="5px"
              padding="0px"
              shadow="0px 8px 16px 0px rgba(0, 0, 0, 0.2)"
              margin="0px 0px 0px 20px"
            >
              <ContainerTitle margin="10px 0px 0px 10px" align="left">
                Informacion General
              </ContainerTitle>
              <Divider />
              <Container justifyContent="space-between">
                <ContainerText align="left" margin="0px 10px">
                  Visualizaciones
                </ContainerText>
                <ContainerText margin="0px 15px" color={Colors.accentColor}>
                  0
                </ContainerText>
              </Container>
              <Container justifyContent="space-between">
                <ContainerText align="left" margin="0px 10px">
                  Recomentaciones
                </ContainerText>
                <ContainerText margin="0px 15px" color={Colors.accentColor}>
                  0
                </ContainerText>
              </Container>
              <Container justifyContent="space-between">
                <ContainerText align="left" margin="0px 10px">
                  Servicios Realizados
                </ContainerText>
                <ContainerText margin="0px 15px" color={Colors.accentColor}>
                  0
                </ContainerText>
              </Container>
            </Container>
          </Container>
        </Wrapper>
      </SuperContainer>
      <Modal
        show={modalShow}
        onHide={() => dispatch(UI.hideModal())}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Editar Perfil
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            method="PATCH"
            backgroundColor="white"
            border="none"
            onSubmit={formik.handleSubmit}
          >
            <Container>
              <Label color={Colors.secondaryTextColor}>Nombre</Label>
              <Input
                name="name"
                margin={properties.input.margin}
                border={properties.input.border}
                radius={properties.input.borderRadius}
                type="text"
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
                value={name}
              />
            </Container>
            <Container>
              <Label color={Colors.secondaryTextColor}>Apellido</Label>
              <Input
                name="lastname"
                margin={properties.input.margin}
                border={properties.input.border}
                radius={properties.input.borderRadius}
                type="text"
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
                value={lastname}
              />
            </Container>
            <Container>
              <Label color={Colors.secondaryTextColor}>Ocupación</Label>
              <Input
                name="occupation"
                margin={properties.input.margin}
                border={properties.input.border}
                radius={properties.input.borderRadius}
                type="text"
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
                value={occupation}
              />
            </Container>

            <Container
              display={properties.formGroup.display}
              direction={properties.formGroup.direction}
            >
              <Label color={Colors.secondaryTextColor}>Imagen de Perfil</Label>

              <Container
                margin={properties.input.margin}
                display={properties.formGroup.display}
              >
                <Input
                  width="85%"
                  border={properties.input.border}
                  radius={properties.inputImg.radius}
                  type="url"
                  id="imageUrl"
                  placeholder="Url"
                  name="imageUrl"
                  value={imageUrl}
                  disabled
                />

                <input
                  id="imageProfile"
                  type="file"
                  name="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => handleInputChangeFile(e, "imageUrl")}
                />

                <Input
                  width="15%"
                  type="button"
                  padding={properties.buttonCargarImg.padding}
                  border={properties.input.border}
                  radius={properties.buttonCargarImg.radius}
                  background={properties.buttonCargarImg.backgrounColor}
                  color={properties.buttonCargarImg.color}
                  onClick={handleImageProfile}
                  value="imagen"
                />
              </Container>
            </Container>
            <Container>
              <Label color={Colors.secondaryTextColor}>Unicación</Label>
              <Input
                name="location"
                margin={properties.input.margin}
                border={properties.input.border}
                radius={properties.input.borderRadius}
                type="text"
                value={location}
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
              />
            </Container>
            <Container>
              <Label color={Colors.secondaryTextColor}>Tipo de Documento</Label>
              <Select
                name="documentType"
                border={properties.input.border}
                radius={properties.input.borderRadius}
                value={documentType}
                onChange={handleInputChange}
              >
                {documentsType.map((type, index) => (
                  <Option
                    key={index}
                    value={type.value}
                    selected={type.value === documentType}
                  >
                    {type.value}
                  </Option>
                ))}
              </Select>
            </Container>
            <Container>
              <Label color={Colors.secondaryTextColor}>
                Número de Documento
              </Label>
              <Input
                name="documentNumber"
                margin={properties.input.margin}
                border={properties.input.border}
                radius={properties.input.borderRadius}
                type="text"
                value={documentNumber}
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
              />
            </Container>
            <Container>
              <Label color={Colors.secondaryTextColor}>Celular</Label>
              <Input
                name="phone"
                margin={properties.input.margin}
                border={properties.input.border}
                radius={properties.input.borderRadius}
                type="text"
                value={phone}
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
              />
            </Container>
            <Container>
              <Label color={Colors.secondaryTextColor}>Dirección</Label>
              <Input
                name="address"
                margin={properties.input.margin}
                border={properties.input.border}
                radius={properties.input.borderRadius}
                type="text"
                value={address}
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
              />
            </Container>

            <Container>
              <Label color={Colors.secondaryTextColor}>Acerca de</Label>
              <TextArea
                name="about"
                margin={properties.input.margin}
                border={properties.input.border}
                radius={properties.input.borderRadius}
                type="text"
                value={about}
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
              />
            </Container>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            color={Colors.textPrimaryColor}
            background="#dc3545"
            onClick={() => dispatch(UI.hideModal())}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            width="auto"
            color={Colors.textPrimaryColor}
            margin="5px"
            value="Actualizar"
            background={Colors.accentColor}
            onClick={formik.handleSubmit}
          >
            Actualizar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Profile;
