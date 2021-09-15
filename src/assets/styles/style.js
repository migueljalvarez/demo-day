import styled, { createGlobalStyle } from "styled-components";
import "./font.css";

const Colors = {
  accentColor: "#448AFF",
  darkPrimaryColor: "#0097A7",
  defaultPrimaryColor: "#00BCD4",
  dividerColor: "#BDBDBD",
  primaryTextColor: "#212121",
  secondaryTextColor: "#757575",
  textPrimaryColor: "#FFFFFF",
  lightPrimaryColor: "#B2EBF2",
};

const GlobalStyle = createGlobalStyle`
body {
  margin: unset;
  padding: unset;
  font-family: 'Montserrat', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Nunito', sans-serif;
}

`;

const Container = styled.div`
  display: ${(props) => (props.display ? props.display : "flex")};
  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "5px")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
`;

const SuperContainer = styled.div`
  display: flex;
  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
  width: "100%";
  height: ${(props) => (props.height ? props.height : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "5px")};
  justify-content: center;
`;

const NavMenu = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  & a {
    margin: 10px;
    color: white;
    text-decoration: none;
    font-family: "Nunito", sans-serif;
    font-weight: bold;
  }
`;

const Img = styled.img`
  width: ${(props) => (props.width ? props.width : "150px")};
  height: ${(props) => (props.height ? props.height : "auto")};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  align-self: center;
  margin: 0 5px;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1366px;
  width: 100%;
  justify-content: space-between;
`;

const SearchBar = styled.form`
  display: flex;
  height: 40px;
  align-self: center;
`;

const Button = styled.button`
  display: flex;
  background: ${(props) =>
    props.background ? props.background : "whitesmoke"};
  color: ${(props) => (props.color ? props.color : "black")};
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: ${(props) => (props.padding ? props.padding : "0.375rem 0.75rem")};
  font-size: 1rem;
  border-radius: ${(props) => (props.radius ? props.radius : "0.25rem")};
  align-self: center;
`;

const Input = styled.input`
  width: ${(props) => (props.width ? props.width : "100%")};
  border: none;
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  font-size: initial;
  padding-left: 10px;
`;

const DropDown = styled.div`
  position: relative;
  display: flex;
  background: ${(props) =>
    props.background ? props.background : "whitesmoke"};
  color: ${(props) => (props.color ? props.color : "black")};
  border: 1px solid transparent;
  font-size: 1rem;
  cursor: pointer;
  margin: 0 5px;
`;

const DropDownMenu = styled.div`
  display: ${(props) => (props.display ? props.display : "flex")};
  position: absolute;
  background-color: ${Colors.textPrimaryColor};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 5px;
  margin-top: 70px;
  left: -50px;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  & a {
    margin: 10px;
    color: ${Colors.secondaryTextColor};
    text-decoration: none;
    font-family: "Nunito", sans-serif;
    font-weight: bold;
  }
`;

const CarouselWrapper = styled.div`
  height: 350px;
  margin: 10px;

  & img {
    height: 350px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 50px;
  margin-left: 10em;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const Footer = styled.div`
  background: "#448AFF";
  display: flex;
  justify-content: space-between;
  bottom: 0px;
  width: 100%;
  height: 80px;
  left: 0px;
`;

const Heading = styled.p`
  font-size: 15px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
`;

export {
  Button,
  Colors,
  Container,
  GlobalStyle,
  Img,
  Input,
  NavMenu,
  SearchBar,
  SuperContainer,
  Wrapper,
  DropDown,
  DropDownMenu,
  CarouselWrapper,
  Column,
  Row,
  Footer,
  Heading,
};
