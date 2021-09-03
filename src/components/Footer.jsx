import React from "react";
import { Link } from "react-router-dom";
import {
  Footer,
  Container,
  Row,
  Column,
  Heading,
  Img,
  Colors,
} from "../assets/styles/style";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Information, Terms, Help } from "../helpers/footerLink";

const Logo = "https://nrskarmakar.com/images/company-logo/default-logo.png";
const properties = {
  background: Colors.accentColor,
  color: Colors.textPrimaryColor,
};
const styledLink = {textDecoration: 'none' };


const FooterComponent = () => {
  return (
    <Footer>
      <Container background={properties.background}>
        <Img src={Logo} alt="" />

        <Row>
          <Column>
            <Heading>Información</Heading>
            {Information.map((item, index) => (
              <Link key={index} to={item.path} style={styledLink} color={properties.color}>
                {item.label}
              </Link>
            ))}
          </Column>
          <Column>
            <Heading>Términos</Heading>
            {Terms.map((item, index) => (
              <Link key={index} to={item.path} style={styledLink}>
                {item.label}
              </Link>
            ))}
          </Column>
          <Column>
            <Heading>Contacto</Heading>
            {Help.map((item, index) => (
              <Link key={index} to={item.path} style={styledLink}>
                {item.label}
              </Link>
            ))}
          </Column>
          <Column>
          <Link href="#">
            <FaFacebook size= '2em' color='white' />
          </Link> 
          </Column>
          <Column>
          <Link href="#">
            <FaInstagram size= '2em' color='white' />
          </Link>
          </Column>
          <Column>
          <Link href="#">
            <FaTwitter size= '2em' color='white' />
          </Link>
          </Column>
          <Column>
          <Link href="#">
            <FaYoutube size= '2em' color='white' />
          </Link>
          </Column>
        </Row>
      </Container>
    </Footer>
  );
};
export default FooterComponent;