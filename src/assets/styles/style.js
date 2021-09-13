import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
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
*{
  box-sizing: border-box;
}
html {
  min-height: 100vh;
  position: relative;
}
body {
  margin: unset;
  padding: unset;
  font-family: 'Montserrat', sans-serif !important;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Nunito', sans-serif !important;
}

footer {
  background: ${Colors.defaultPrimaryColor};
  bottom: 0px;
  width: 100%;
  position: absolute;
}
`;

const Container = styled.div`
  display: ${(props) => (props.display ? props.display : "flex")};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "wrap")};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
  color: ${(props) => (props.color ? props.color : "black")};
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  box-shadow: ${(props) => props.boxShadow};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "unset")};
  position: ${(props) => (props.position ? props.position : "static")};
  top: ${(props) => (props.top ? props.top : "auto")};
  left: ${(props) => (props.left ? props.left : "auto")};
  box-shadow: ${(props) => (props.shadow ? props.shadow : "unset")};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
`;

const SuperContainer = styled.div`
  display: flex;
  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
  width: 100%;
  height: ${(props) => (props.height ? props.height : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;

const NavMenu = styled.ul`
  margin: unset;
  padding: 0;
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  & a {
    margin: 5px;
    color: white;
    text-decoration: none;
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  }
`;

const Img = styled.img`
  width: ${(props) => (props.width ? props.width : "150px")};
  height: ${(props) => (props.height ? props.height : "auto")};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  border: ${(props) => (props.border ? props.border : "none")};
  margin: ${(props) => (props.margin ? props.margin : "0 5px")};
  align-self: ${(props) => (props.self ? props.self : "center")};
  margin: ${(props) => (props.margin ? props.margin : "0 5px")};
  position: ${(props) => (props.position ? props.position : "unset")};
  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1366px;
  width: 100%;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "space-between"};
  flex-wrap: wrap;
`;

const SearchBar = styled.form`
  display: flex;
  height: 40px;
  align-self: center;
`;

const Button = styled.button`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  display: ${(props) => (props.display ? props.display : "flex")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  background: ${(props) =>
    props.background ? props.background : "whitesmoke"};
  color: ${(props) => (props.color ? props.color : "black")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0.375rem 0.75rem")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : "0"};
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  border: ${(props) => (props.border ? props.border : "1px solid transparent")};
  border-radius: ${(props) => (props.radius ? props.radius : "0.25rem")};
  align-self: center;
  &:disabled {
    background: darkgray;
    cursor: auto;
  }
  & svg {
    margin: 0px 5px;
  }
`;

const Label = styled.label`
  width: ${(props) => (props.width ? props.width : "100%")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "auto")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "auto")};
  color: ${(props) => (props.color ? props.color : Colors.textPrimaryColor)};
  box-sizing: border-box;
`;

const Input = styled.input`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 38px;
  background: ${(props) => (props.background ? props.background : "white")};
  color: ${(props) => (props.color ? props.color : "black")};
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  outline: none;
  appearance: ${(props) => (props.appearance ? props.appearance : "auto")};
  font-size: initial;
  padding-left: 10px;
  align-self: center;

  & :hover {
    appearance: none;
  }
  & :focus {
    appearance: none;
  }
  & :selected {
    appearance: none;
  }
`;

const SelectBox = styled.select`
  height: 38px;
  padding: ${(props) => (props.padding ? props.padding : "0")};
`;

const TextArea = styled.textarea`
  min-width: ${(props) => (props.width ? props.width : "100%")};
  max-width: ${(props) => (props.width ? props.width : "100%")};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  min-height: ${(props) => (props.minHeight ? props.width : "200px")};
  max-height: ${(props) => (props.maxHeight ? props.width : "400px")};
  border: ${(props) => (props.border ? props.border : "none")};

  font-size: 18px;
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
const Form = styled.form`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : Colors.defaultPrimaryColor};
  border: ${(props) =>
    props.border ? props.border : "3px solid" + Colors.defaultPrimaryColor};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  position: ${(props) => (props.position ? props.position : "relative")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "0")};
  display: ${(props) => (props.display ? props.display : "flex")};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "wrap")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};

  box-sizing: border-box;
`;
const Span = styled.span`
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;
const Hr = styled.hr`
  width: ${(props) => (props.width ? props.width : "100%")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
`;

const ContainerTitle = styled.h3`
  margin: ${(props) => (props.margin ? props.margin : "0")};
  color: ${(props) => (props.color ? props.color : Colors.primaryTextColor)};
  text-align: ${(props) => (props.align ? props.align : "center")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
`;

const ContainerSubTitle = styled.p`
  margin: ${(props) => (props.margin ? props.margin : "0")};
  color: ${(props) => (props.color ? props.color : Colors.secondaryTextColor)};
  text-align: ${(props) => (props.align ? props.align : "center")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
`;

const ContainerText = styled.h5`
  margin: ${(props) => (props.margin ? props.margin : "0")};
  color: ${(props) => (props.color ? props.color : Colors.secondaryTextColor)};
  text-align: ${(props) => (props.align ? props.align : "center")};
  position: ${(props) => (props.position ? props.position : "unset")};
`;

const Divider = styled.hr`
  width: ${(props) => (props.width ? props.width : "100%")};
  border: 0;
  border-top: 1px solid ${Colors.dividerColor};
`;

const Paragraph = styled.p`
  margin: ${(props) => (props.margin ? props.margin : "0")};
  color: ${(props) => (props.color ? props.color : Colors.secondaryTextColor)};
  text-align: ${(props) => (props.align ? props.align : "center")};
  position: ${(props) => (props.position ? props.position : "unset")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
`;

const ContainerTitleH1 = styled.h1`
  margin: ${(props) => (props.margin ? props.margin : "0")};
  color: ${(props) => (props.color ? props.color : Colors.primaryTextColor)};
  text-align: ${(props) => (props.align ? props.align : "center")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
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
  width: 250px;
`;

const Row = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 50px;
  margin-left: 10em;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const Heading = styled.h3`
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Select = styled.select`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 38px;
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0 0 0 10px")};
  outline: none;
  font-size: initial;

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #757575;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: #bdbdbd;
    border-radius: 4px;
  }
`;

const Option = styled.option`
  min-height: 1.2em;

  & :hover {
    background-color: #000;
  }
`;

const LINK = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: ${(props) => (props.color ? props.color : Colors.textPrimaryColor)};
  font-weight: 700;

  &:hover {
    color: ${(props) => (props.color ? props.color : Colors.accentColor)};
  }
`;

export {
  Button,
  Colors,
  Container,
  ContainerSubTitle,
  ContainerText,
  ContainerTitle,
  ContainerTitleH1,
  Divider,
  DropDown,
  DropDownMenu,
  Form,
  GlobalStyle,
  Hr,
  Img,
  Input,
  SelectBox,
  TextArea,
  Label,
  LINK,
  NavMenu,
  Option,
  Paragraph,
  SearchBar,
  Select,
  Span,
  SuperContainer,
  Wrapper,
  CarouselWrapper,
  Column,
  Row,
  Heading,
};
