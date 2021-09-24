import React from "react";
import {
  Container,
  NavMenu,
  Img,
  Wrapper,
  SuperContainer,
  Colors,
} from "../assets/styles/style";
import { Link } from "react-router-dom";
import { dropDownMenu, principalMenu } from "../helpers/menu";
import { useSelector } from "react-redux";
import DropDownMenu from "./DropDownMenu";

import logo from "../assets/svg/logo.svg";

const properties = {
  background: Colors.defaultPrimaryColor,
};

const NavBar = () => {
  const user = useSelector((state) => state.auth);
  return (
    <SuperContainer background={properties.background} padding="10px 0px">
      <Wrapper className="wrapper">
        <Container className="" width="auto">
          <Img src={logo} alt="logo" />
        </Container>
        <Container width="auto">
          <NavMenu>
            {principalMenu.map((item, index) => (
              <Link key={index} to={item.path}>
                {item.label}
              </Link>
            ))}
          </NavMenu>
          <DropDownMenu items={dropDownMenu} user={user} />
        </Container>
      </Wrapper>
    </SuperContainer>
  );
};

export default NavBar;
