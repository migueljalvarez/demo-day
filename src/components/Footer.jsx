import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Heading,
  Img,
  Colors,
  SuperContainer,
  Wrapper,
  NavMenu,
  Paragraph,
} from "../assets/styles/style";
import { Information, Terms, Help } from "../helpers/footerLink";

import logo from "../assets/svg/logo.svg";
import Socials from "./Socials";

const properties = {
  background: Colors.defaultPrimaryColor,
  color: Colors.textPrimaryColor,
  padding: "15px 0px",
};

const FooterComponent = () => {
  return (
    <footer>
      <SuperContainer direction="">
        <Wrapper>
          <Container
            background={properties.background}
            padding={properties.padding}
          >
            <div className="row w-100">
              <div className="col-md-3 col-sm">
                <Heading>Información</Heading>
                <NavMenu
                  direction="column"
                  alignItems="flex-start"
                  fontWeight="normal"
                >
                  {Information.map((item, index) => (
                    <Link key={index} to={item.path} color={properties.color}>
                      {item.label}
                    </Link>
                  ))}
                </NavMenu>
              </div>
              <div className="col-md-3 col-sm">
                {" "}
                <Heading>Términos</Heading>
                <NavMenu
                  direction="column"
                  alignItems="flex-start"
                  fontWeight="normal"
                >
                  {Terms.map((item, index) => (
                    <Link key={index} to={item.path}>
                      {item.label}
                    </Link>
                  ))}
                </NavMenu>
              </div>
              <div className="col-md-3 col-sm">
                <Heading>Contacto</Heading>
                <NavMenu
                  direction="column"
                  alignItems="flex-start"
                  fontWeight="normal"
                >
                  {Help.map((item, index) => (
                    <Link key={index} to={item.path}>
                      {item.label}
                    </Link>
                  ))}
                </NavMenu>
              </div>
              <div className="col-md-3 col-sm">
                <Container className="my-3">
                  <Img src={logo} alt="dom-service" />
                </Container>
                <Socials />
              </div>
            </div>
          </Container>
        </Wrapper>
      </SuperContainer>
      <SuperContainer background={Colors.darkPrimaryColor}>
        <Wrapper>
          <Container padding="10px 0px" width="100%" justifyContent="center">
            <Paragraph color={Colors.textPrimaryColor}>
              Copyright © {new Date().getFullYear()} Todos los derechos
              resevados
            </Paragraph>
          </Container>
        </Wrapper>
      </SuperContainer>
    </footer>
  );
};
export default FooterComponent;
