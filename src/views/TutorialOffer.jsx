import React from "react";

import {
  Colors,
  Container,
  ContainerSubTitle,
  ContainerText,
  ContainerTitle,
  Img,
  SuperContainer,
  Wrapper,
} from "../assets/styles/style";

//img
import Dropdown from "../assets/img/Dropdown.png";
import Registro from "../assets/img/Registro.png";
import UsuariosAgregados from "../assets/img/UsuariosAgregados.png";
import DropdownUsuario from "../assets/img/DropdownUsuario.png";
import BotonEditar from "../assets/img/BotonEditar.png";
import PopUpDatos from "../assets/img/PopUpDatos.png";
import UsuarioActualizado from "../assets/img/UsuarioActualizado.png";
import BotonServicios from "../assets/img/BotonServicios.png";
import AñadirServicios from "../assets/img/AñadirServicios.png";
import ServicioPublicado from "../assets/img/ServicioPublicado.png";

const PROP = {
  containerTutorial: {
    margin: "5rem 0 297px 0",
  },

  TitleTutorial: {
    color: Colors.secondaryTextColor,
    margin: "1rem 0",
    fontWeight: "700",
  },
  containerDescription: {
    width: "100%",
    padding: "1.5rem 0",
    justifyContent: "space-around",
    alignItems: "initial",
    margin: "0 0 2rem 0",
    direction: "row-reverse",
  },
  containerImgDescription: {
    width: "calc(50% - 10px )",
  },
  containerTextDescription: {
    width: "calc(50% - 10px )",
    justifyContent: "center",
    alignItems: "center",
    color: Colors.secondaryTextColor,
  },
  containerSubtitleText: {
    width: "100%",
    align: "end",
    color: Colors.secondaryTextColor,
  },
  containerText: {
    width: "100%",
    align: "end",
    color: Colors.secondaryTextColor,
  },
  containerDescriptionReverse: {
    direction: "row-reverse",
  },
  containerSubtitleTextReverse: {
    align: "start",
  },
  containerTextReverse: {
    align: "start",
  },
};

const TutorialOffer = () => {
  return (
    <SuperContainer>
      <Wrapper>
        <Container margin={PROP.containerTutorial.margin}>
          <ContainerTitle
            margin={PROP.TitleTutorial.margin}
            fontWeight={PROP.TitleTutorial.fontWeight}
            color={PROP.TitleTutorial.color}
          >
            ¿Cómo puedes ofrecer tu servicio?
          </ContainerTitle>

          {/* PASO #1 */}

          <Container
            width={PROP.containerDescription.width}
            justifyContent={PROP.containerDescription.justifyContent}
            alignItems={PROP.containerDescription.alignItems}
            padding={PROP.containerDescription.padding}
            margin={PROP.containerDescription.margin}
          >
            <Container width={PROP.containerImgDescription.width}>
              <Img src={Dropdown} width="100%" />
            </Container>
            <Container
              width={PROP.containerTextDescription.width}
              justifyContent={PROP.containerTextDescription.justifyContent}
              alignItems={PROP.containerTextDescription.alignItems}
              color={PROP.containerTextDescription.color}
            >
              <ContainerSubTitle
                width={PROP.containerSubtitleText.width}
                align={PROP.containerSubtitleText.align}
                color={PROP.containerSubtitleText.color}
              >
                Paso 1
              </ContainerSubTitle>
              <ContainerText
                width={PROP.containerText.width}
                align={PROP.containerText.align}
                color={PROP.containerText.color}
              >
                para ofrecer tus servicios debes primero registrarte para eso
                abrir el menu en la parte superior derecha de tu navegador y dar
                click en registrarse
              </ContainerText>
            </Container>
          </Container>

          {/* PASO #2 */}

          <Container
            width={PROP.containerDescription.width}
            direction={PROP.containerDescriptionReverse.direction}
            justifyContent={PROP.containerDescription.justifyContent}
            alignItems={PROP.containerDescription.alignItems}
            padding={PROP.containerDescription.padding}
            margin={PROP.containerDescription.margin}
          >
            <Container width={PROP.containerImgDescription.width}>
              <Img src={Registro} width="100%" />
            </Container>
            <Container
              width={PROP.containerTextDescription.width}
              justifyContent={PROP.containerTextDescription.justifyContent}
              alignItems={PROP.containerTextDescription.alignItems}
              color={PROP.containerTextDescription.color}
            >
              <ContainerSubTitle
                width={PROP.containerSubtitleText.width}
                align={PROP.containerSubtitleTextReverse.align}
                color={PROP.containerSubtitleText.color}
              >
                Paso 2
              </ContainerSubTitle>
              <ContainerText
                width={PROP.containerText.width}
                align={PROP.containerTextReverse.align}
                color={PROP.containerText.color}
              >
                Después de darle click te llevara al formulario de registro allí
                debés llenar todos los campos que te solicitan y luego dar click
                en registrar automaticamente seras redirigido a la pantalla
                principal
              </ContainerText>
            </Container>
          </Container>

          {/* PASO # 3 */}

          <Container
            width={PROP.containerDescription.width}
            justifyContent={PROP.containerDescription.justifyContent}
            alignItems={PROP.containerDescription.alignItems}
            padding={PROP.containerDescription.padding}
            margin={PROP.containerDescription.margin}
          >
            <Container width={PROP.containerImgDescription.width}>
              <Img src={UsuariosAgregados} width="100%" />
            </Container>
            <Container
              width={PROP.containerTextDescription.width}
              justifyContent={PROP.containerTextDescription.justifyContent}
              alignItems={PROP.containerTextDescription.alignItems}
              color={PROP.containerTextDescription.color}
            >
              <ContainerSubTitle
                width={PROP.containerSubtitleText.width}
                align={PROP.containerSubtitleText.align}
                color={PROP.containerSubtitleText.color}
              >
                Paso 3
              </ContainerSubTitle>
              <ContainerText
                width={PROP.containerText.width}
                align={PROP.containerText.align}
                color={PROP.containerText.color}
              >
                En la pantalla de inicio apareceras como un nuevo usuario, pero
                se vera algo tosco para que la demas persona te puedan conocer
                mejor te sugerimos que actualices tus datos
              </ContainerText>
            </Container>
          </Container>

          {/* PASO # 4 */}

          <Container
            width={PROP.containerDescription.width}
            direction={PROP.containerDescriptionReverse.direction}
            justifyContent={PROP.containerDescription.justifyContent}
            alignItems={PROP.containerDescription.alignItems}
            padding={PROP.containerDescription.padding}
            margin={PROP.containerDescription.margin}
          >
            <Container width={PROP.containerImgDescription.width}>
              <Img src={DropdownUsuario} width="100%" />
            </Container>
            <Container
              width={PROP.containerTextDescription.width}
              justifyContent={PROP.containerTextDescription.justifyContent}
              alignItems={PROP.containerTextDescription.alignItems}
              color={PROP.containerTextDescription.color}
            >
              <ContainerSubTitle
                width={PROP.containerSubtitleText.width}
                align={PROP.containerSubtitleTextReverse.align}
                color={PROP.containerSubtitleText.color}
              >
                Paso 4
              </ContainerSubTitle>
              <ContainerText
                width={PROP.containerText.width}
                align={PROP.containerTextReverse.align}
                color={PROP.containerText.color}
              >
                dando nuevamente click en la parte superior derecha justo como
                lo hiciste cuando te ibas a registar das click en perfil este te
                redirigira a tu perfil y alli podras actualizar tus datos
              </ContainerText>
            </Container>
          </Container>

          {/* PASO #5 */}

          <Container
            width={PROP.containerDescription.width}
            justifyContent={PROP.containerDescription.justifyContent}
            alignItems={PROP.containerDescription.alignItems}
            padding={PROP.containerDescription.padding}
            margin={PROP.containerDescription.margin}
          >
            <Container width={PROP.containerImgDescription.width}>
              <Img src={BotonEditar} width="100%" />
            </Container>
            <Container
              width={PROP.containerTextDescription.width}
              justifyContent={PROP.containerTextDescription.justifyContent}
              alignItems={PROP.containerTextDescription.alignItems}
              color={PROP.containerTextDescription.color}
            >
              <ContainerSubTitle
                width={PROP.containerSubtitleText.width}
                align={PROP.containerSubtitleText.align}
                color={PROP.containerSubtitleText.color}
              >
                Paso 5
              </ContainerSubTitle>
              <ContainerText
                width={PROP.containerText.width}
                align={PROP.containerText.align}
                color={PROP.containerText.color}
              >
                Das click en el boton de editar esto te abrira un pop-up donde
                podras actualizar tus datos
              </ContainerText>
            </Container>
          </Container>

          {/* PASO # 6 */}

          <Container
            width={PROP.containerDescription.width}
            direction={PROP.containerDescriptionReverse.direction}
            justifyContent={PROP.containerDescription.justifyContent}
            alignItems={PROP.containerDescription.alignItems}
            padding={PROP.containerDescription.padding}
            margin={PROP.containerDescription.margin}
          >
            <Container width={PROP.containerImgDescription.width}>
              <Img src={PopUpDatos} width="100%" />
            </Container>
            <Container
              width={PROP.containerTextDescription.width}
              justifyContent={PROP.containerTextDescription.justifyContent}
              alignItems={PROP.containerTextDescription.alignItems}
              color={PROP.containerTextDescription.color}
            >
              <ContainerSubTitle
                width={PROP.containerSubtitleText.width}
                align={PROP.containerSubtitleTextReverse.align}
                color={PROP.containerSubtitleText.color}
              >
                Paso 6
              </ContainerSubTitle>
              <ContainerText
                width={PROP.containerText.width}
                align={PROP.containerTextReverse.align}
                color={PROP.containerText.color}
              >
                Ya dento del pop-up podras actualizar tu nombre, tu foto de
                perfil, tu foto de portada, tu direccion, podras contar un poco
                sobre ti entre muchas otras cosas.
              </ContainerText>
            </Container>
          </Container>

          {/* PASO # 7 */}

          <Container
            width={PROP.containerDescription.width}
            justifyContent={PROP.containerDescription.justifyContent}
            alignItems={PROP.containerDescription.alignItems}
            padding={PROP.containerDescription.padding}
            margin={PROP.containerDescription.margin}
          >
            <Container width={PROP.containerImgDescription.width}>
              <Img src={UsuarioActualizado} width="100%" />
            </Container>
            <Container
              width={PROP.containerTextDescription.width}
              justifyContent={PROP.containerTextDescription.justifyContent}
              alignItems={PROP.containerTextDescription.alignItems}
              color={PROP.containerTextDescription.color}
            >
              <ContainerSubTitle
                width={PROP.containerSubtitleText.width}
                align={PROP.containerSubtitleText.align}
                color={PROP.containerSubtitleText.color}
              >
                Paso 7
              </ContainerSubTitle>
              <ContainerText
                width={PROP.containerText.width}
                align={PROP.containerText.align}
                color={PROP.containerText.color}
              >
                Asi se veria tu nuevo perfil actualizado
              </ContainerText>
            </Container>
          </Container>

          {/* PASO # 8 */}

          <Container
            width={PROP.containerDescription.width}
            direction={PROP.containerDescriptionReverse.direction}
            justifyContent={PROP.containerDescription.justifyContent}
            alignItems={PROP.containerDescription.alignItems}
            padding={PROP.containerDescription.padding}
            margin={PROP.containerDescription.margin}
          >
            <Container width={PROP.containerImgDescription.width}>
              <Img src={BotonServicios} width="100%" />
            </Container>
            <Container
              width={PROP.containerTextDescription.width}
              justifyContent={PROP.containerTextDescription.justifyContent}
              alignItems={PROP.containerTextDescription.alignItems}
              color={PROP.containerTextDescription.color}
            >
              <ContainerSubTitle
                width={PROP.containerSubtitleText.width}
                align={PROP.containerSubtitleTextReverse.align}
                color={PROP.containerSubtitleText.color}
              >
                Paso 8
              </ContainerSubTitle>
              <ContainerText
                width={PROP.containerText.width}
                align={PROP.containerTextReverse.align}
                color={PROP.containerText.color}
              >
                Ok A lo que vinimos como puedes agregar un servicio En el mismo
                apartado de perdil encontraras un boton de servicio da click
                este te redirigira a un nuevo formulario
              </ContainerText>
            </Container>
          </Container>

          {/* PASO # 9 */}

          <Container
            width={PROP.containerDescription.width}
            justifyContent={PROP.containerDescription.justifyContent}
            alignItems={PROP.containerDescription.alignItems}
            padding={PROP.containerDescription.padding}
            margin={PROP.containerDescription.margin}
          >
            <Container width={PROP.containerImgDescription.width}>
              <Img src={AñadirServicios} width="100%" />
            </Container>
            <Container
              width={PROP.containerTextDescription.width}
              justifyContent={PROP.containerTextDescription.justifyContent}
              alignItems={PROP.containerTextDescription.alignItems}
              color={PROP.containerTextDescription.color}
            >
              <ContainerSubTitle
                width={PROP.containerSubtitleText.width}
                align={PROP.containerSubtitleText.align}
                color={PROP.containerSubtitleText.color}
              >
                Paso 9
              </ContainerSubTitle>
              <ContainerText
                width={PROP.containerText.width}
                align={PROP.containerText.align}
                color={PROP.containerText.color}
              >
                Allí te encontraras con un formulario en cual podras registrar
                la actividad que estas ofreciendo Construccion, Mantenimiento,
                Asesoramientos, Contabilidad entre muchas otras debes llenar
                todos los campos para que puedas publicar tu servicio y dar
                click en guardar.
              </ContainerText>
            </Container>
          </Container>

          {/* PASO # 10 */}

          <Container
            width={PROP.containerDescription.width}
            direction={PROP.containerDescriptionReverse.direction}
            justifyContent={PROP.containerDescription.justifyContent}
            alignItems={PROP.containerDescription.alignItems}
            padding={PROP.containerDescription.padding}
            margin={PROP.containerDescription.margin}
          >
            <Container width={PROP.containerImgDescription.width}>
              <Img src={ServicioPublicado} width="100%" />
            </Container>
            <Container
              width={PROP.containerTextDescription.width}
              justifyContent={PROP.containerTextDescription.justifyContent}
              alignItems={PROP.containerTextDescription.alignItems}
              color={PROP.containerTextDescription.color}
            >
              <ContainerSubTitle
                width={PROP.containerSubtitleText.width}
                align={PROP.containerSubtitleTextReverse.align}
                color={PROP.containerSubtitleText.color}
              >
                Paso 10
              </ContainerSubTitle>
              <ContainerText
                width={PROP.containerText.width}
                align={PROP.containerTextReverse.align}
                color={PROP.containerText.color}
              >
                Y listo tu servicio estara publicado en nuestra aplicacion y la
                podras visualizar en el apartado de servicios en la barra de
                navegación
              </ContainerText>
            </Container>
          </Container>
        </Container>
      </Wrapper>
    </SuperContainer>
  );
};

export default TutorialOffer;
