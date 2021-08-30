import styled from "styled-components";

const ContainerAuth = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const ContainerLogin = styled.div`
  width: calc(50% - 5px);
  padding: 80px 0 30px 0;
`;
const ContainerImage = styled.div`
  width: calc(50% - 5px);
  img {
    width: 100%;
  }
`;
const Form = styled.form`
  width: 70%;
  margin: auto;
  background-color: #ccc;
  border: 3px solid #00bcd4;
  position: relative;
  padding: 80px 20px 30px 20px;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const ImgHeader = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  top: -50px;
  left: calc(50% - 50px);

  img {
    width: 100%;
    border-radius: 50%;
    border: 3px solid #00bcd4;
  }
`;
const ContainerInput = styled.div`
  width: 100%;
`;
const ContainerBtn = styled.div`
  width: 100%;
  text-align: center;
`;
const Label = styled.label`
  width: 100%;
  margin: 0 auto 20px auto;
  box-sizing: border-box;
`;
const Input = styled.input`
  width: 100%;
  margin: 0 auto 20px auto;
  padding-bottom: 5px;
  box-sizing: border-box;
  padding: 7px 2px;
  border: none;
  outline: none;
  border-radius: 7px;
`;
const BtnLogin = styled.button`
  width: 100%;
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  border: none;
  outline: none;
  border-radius: 7px;

  background-color: #448aff;
  color: white;
`;

const Hr = styled.hr`
  width: 100%;
  margin: 1rem 0;
`;

const BtnGoogle = styled.button`
  width: 100%;
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  border: none;
  outline: none;
  border-radius: 7px;

  color: white;
  background-color: #ea4335;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BtnFacebook = styled.button`
  width: 100%;
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  border: none;
  outline: none;
  border-radius: 7px;

  color: white;
  background-color: #3b5998;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;
const Span = styled.span`
  margin: 0 10px;
`;
const LinkAuth = styled.div`
  width: 100%;
  text-align: center;
`;
const Link = styled.a`
  text-decoration: none;
  color: black;
`;

export {
  ContainerAuth,
  ContainerLogin,
  ContainerImage,
  Form,
  ImgHeader,
  ContainerInput,
  ContainerBtn,
  Label,
  Input,
  BtnLogin,
  Hr,
  BtnGoogle,
  BtnFacebook,
  Span,
  LinkAuth,
  Link,
};
