import styled from "styled-components";
import { Colors } from "./style";


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

  width: ${(props) => (props.width ? props.width : "unset")};
  justify-content: ${(props) =>
  props.justifyContent ? props.justifyContent : "center"};
  min-width: 200px;
  max-width: 600px;
`;

const CardContainer = styled.div`
    width: ${(props) => (props.width ? props.width : "400px")};
    background: ${(props) =>
    props.background ? props.background : Colors.darkPrimaryColor};
    border-radius: 8px;
    height:500px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const CardBody = styled.div`
    background: ${(props) =>
    props.background ? props.background : Colors.lightPrimaryColor};
    padding-top: 55px;

    width: ${(props) => (props.width ? props.width : "400px")};
    border-radius: 8px;
    height:380px;

    display: flex;
    flex-direction: column;
`

const ProfileImage = styled.img`
    width: 120px;
    height: 120px !important;
    background: ${(props) =>
    props.background ? props.background : Colors.defaultPrimaryColor};

    position: relative;
    top: 10%;
    left: calc(50% - 120px/2);
    border-radius: 50%;
    border: none;
`

const Name = styled.h1`
    text-align: ${(props) => props.align ? props.align : "unset"};
    margin: 0px;
    padding: unset;
`

export {Button, CardContainer, CardBody, ProfileImage, Name}