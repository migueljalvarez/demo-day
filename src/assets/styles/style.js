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
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "5px")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  box-shadow: ${(props) => props.boxShadow};
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
  align-self: ${(props) => (props.self ? props.self : "center")};
  margin: ${(props) => (props.margin ? props.margin : "0 5px")};
  position: ${(props) => (props.position ? props.position : "unset")};
  border: ${(props) => props.border};
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
  height: 38px;
  border: none;
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  font-size: initial;
  padding-left: 10px;
  align-self: center;
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

const ContainerTitle = styled.h3`
  margin: ${(props) => (props.margin ? props.margin : "0")};
  color: ${(props) => (props.color ? props.color : Colors.primaryTextColor)};
  text-align: ${(props) => (props.align ? props.align : "center")};
`;

const ContainerSubTitle = styled.h4`
  margin: ${(props) => (props.margin ? props.margin : "0")};
  color: ${(props) => (props.color ? props.color : Colors.secondaryTextColor)};
  text-align: ${(props) => (props.align ? props.align : "center")};
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
`;

export {
  Button,
  Colors,
  Container,
  ContainerSubTitle,
  ContainerText,
  ContainerTitle,
  DropDown,
  DropDownMenu,
  GlobalStyle,
  Img,
  Input,
  NavMenu,
  SearchBar,
  SuperContainer,
  Wrapper,
  Divider,
  Paragraph,
};
