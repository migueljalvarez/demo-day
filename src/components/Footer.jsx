import React from "react";
import { Link } from "react-router-dom";
import {
  Footer,
  Container,
  Row,
  Column,
  Img,
  Colors,
  NavMenu
} from "../assets/styles/style";
import Logo from '../assets/image/Logo_DOM_Services0.svg';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Information, Terms, Help } from "../helpers/footerLink";


const properties = {
  background: Colors.defaultPrimaryColor,
color: Colors.dividerColor,
};
const styledLink = {textDecoration: 'none' };


const FooterComponent = () => {
  return (
    <Footer>
      <Container background={properties.background}>
        <Img src={Logo} alt="" />

        <Row>
          <Column>
          <NavMenu>
            {Information.map((item, index) => (
              <Link key={index} to={item.path}  color={properties.color}>
                {item.label}
              </Link>
            ))}
            </NavMenu>
          </Column>
          <Column>
          <NavMenu>
            {Terms.map((item, index) => (
              <Link key={index} to={item.path} style={styledLink}>
                {item.label}
              </Link>
            ))}
            </NavMenu>
          </Column>
          <Column>
          <NavMenu>
            {Help.map((item, index) => (
              <Link key={index} to={item.path} style={styledLink}>
                {item.label}
              </Link>
            ))}
            </NavMenu>
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