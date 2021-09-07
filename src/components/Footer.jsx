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
  SuperContainer,
  Wrapper,
  NavMenu,
} from "../assets/styles/style";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Information, Terms, Help } from "../helpers/footerLink";

const Logo = "https://nrskarmakar.com/images/company-logo/default-logo.png";

const properties = {
  background: Colors.defaultPrimaryColor,
  color: Colors.textPrimaryColor,
  padding: "15px 0px",
};

const FooterComponent = () => {
  return (
    <footer>
      <SuperContainer>
        <Wrapper>
          <Container
            background={properties.background}
            padding={properties.padding}
          >
            <Img src={Logo} alt="" />
            <Row>
              <Column>
                <Heading>Información</Heading>
                <NavMenu
                  direction="column"
                  alignItems="baseline"
                  fontWeight="normal"
                >
                  {Information.map((item, index) => (
                    <Link key={index} to={item.path} color={properties.color}>
                      {item.label}
                    </Link>
                  ))}
                </NavMenu>
              </Column>
              <Column>
                <Heading>Términos</Heading>
                <NavMenu
                  direction="column"
                  alignItems="baseline"
                  fontWeight="normal"
                >
                  {Terms.map((item, index) => (
                    <Link key={index} to={item.path}>
                      {item.label}
                    </Link>
                  ))}
                </NavMenu>
              </Column>
              <Column>
                <Heading>Contacto</Heading>
                <NavMenu
                  direction="column"
                  alignItems="baseline"
                  fontWeight="normal"
                >
                  {Help.map((item, index) => (
                    <Link key={index} to={item.path}>
                      {item.label}
                    </Link>
                  ))}
                </NavMenu>
              </Column>
              <Column>
                <Link to="/">
                  <FaFacebook size="2em" color="white" />
                </Link>
              </Column>
              <Column>
                <Link to="/">
                  <FaInstagram size="2em" color="white" />
                </Link>
              </Column>
              <Column>
                <Link to="/">
                  <FaTwitter size="2em" color="white" />
                </Link>
              </Column>
              <Column>
                <Link to="/">
                  <FaYoutube size="2em" color="white" />
                </Link>
              </Column>
            </Row>
          </Container>
        </Wrapper>
      </SuperContainer>
    </footer>
  );
};
export default FooterComponent;
