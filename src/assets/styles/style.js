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
  margin: ${(props) => props.margin ? props.margin : "0"};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  flex-wrap: ${(props) =>
    props.flexWrap ? props.flexWrap : "nowrap"};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  position: ${(props) => props.position ? props.position : "static"};
  top: ${(props) => props.top ? props.top : "auto"};
  left: ${(props) => props.left ? props.left : "auto"};
  color: ${(props) => (props.color ? props.color : "auto")};

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
  border: ${(props) => (props.border ? props.border : "none")};
  align-self: center;
  margin: ${(props) => (props.margin ? props.margin : "0 5px")};
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
  width: ${(props) => (props.width ? props.width : "auto")};
  display: ${(props) => (props.display ? props.display : "flex")};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : "center")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  background: ${(props) =>
    props.background ? props.background : "whitesmoke"};
  color: ${(props) => (props.color ? props.color : "black")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0.375rem 0.75rem")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "auto")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  letter-spacing: ${(props) => (props.letterSpacing ? props.letterSpacing : "0")};
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  border: ${(props) => (props.border ? props.border : "1px solid transparent")} ;
  font-size: 1rem;
  border-radius: ${(props) => (props.radius ? props.radius : "0.25rem")};
  align-self: center;
`;

const ButtonForm = styled.button`
  font-size: 0.9rem;
  padding: 0.75rem 1rem;
  border: none;
  outline: none;
  border-radius: 7px;

  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : Colors.darkPrimaryColor};
  color: ${(props) => props.color ? props.color : Colors.textPrimaryColor};
  margin-bottom: ${(props) => props.marginBottom ? props.marginBottom : '0'};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  width: ${(props) => (props.width ? props.width : "100%")};
  margin: ${(props) => props.margin ? props.margin : "0"};
  color: ${(props) => props.color ? props.color : Colors.textPrimaryColor};
  box-sizing: border-box;
`;


const Input = styled.input`
  width: ${(props) => (props.width ? props.width : "100%")};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  margin: ${(props) => props.margin ? props.margin : "0"};
  padding: ${(props) => props.padding ? props.padding : "0"};
  border: none;
  outline: none;
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
const Form = styled.form`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : Colors.defaultPrimaryColor};
  border: ${(props) =>
    props.border ? props.border : "3px solid" + Colors.defaultPrimaryColor};
  position: ${(props) => (props.position ? props.position : "relative")};
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
  margin: ${(props) => props.margin ? props.margin : "0"};
`;
const Hr = styled.hr`
  width: ${(props) => (props.width ? props.width : "100%")};
  margin: ${(props) => props.margin ? props.margin : "0"};
`;

export {
  Button,
  ButtonForm,
  Colors,
  Container,
  GlobalStyle,
  Img,
  Label,
  Input,
  NavMenu,
  SearchBar,
  SuperContainer,
  Wrapper,
  DropDown,
  DropDownMenu,
  Form,
  Span,
  Hr,
};
