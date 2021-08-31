import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Img,
} from '../../assets/styles/style';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
  

const logo = "https://nrskarmakar.com/images/company-logo/default-logo.png";

const Footer = () => {
  return (
    <Box>
       <Container>
       <Img src={logo} alt="logo" />
        <Row>
          <Column>
            <Heading>Información</Heading>
            <FooterLink href="#">¿Quiénes somos?</FooterLink>
            <FooterLink href="#">¿Cómo funciona?</FooterLink>
            <FooterLink href="#">Mapa del sitio</FooterLink>
          </Column>
          <Column>
            <Heading>Términos</Heading>
            <FooterLink href="#">Política de seguridad</FooterLink>
            <FooterLink href="#">Términos y condiciones</FooterLink>
            <FooterLink href="#">Política de Copyright</FooterLink>
          </Column>
          <Column>
            <Heading>Contacto</Heading>
            <FooterLink href="#">Lorem</FooterLink>
            <FooterLink href="#">Lorem</FooterLink>
            <FooterLink href="#">Lorem</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">
              <FaFacebook style={{ marginLeft: "10px" }} />
                <span >
                  Facebook
                </span>
            </FooterLink>
            <FooterLink href="#">
              <FaInstagram style={{ marginLeft: "10px" }} />
                <span >
                  Instagram
                </span>
            </FooterLink>
            <FooterLink href="#">
              <FaTwitter style={{ marginLeft: "10px" }} />
                <span >
                  Twitter
                </span>
            </FooterLink>
            <FooterLink href="#">
              <FaYoutube style={{ marginLeft: "10px" }} />
                <span >
                  Youtube
                </span>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;