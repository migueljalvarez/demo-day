import React from "react";
import SearchBar from "./SearchBar";
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

import Logo from '../assets/image/Logo_DOM_Services0.svg';
import Avatar from "./Avatar";
import DropDownMenu from "./DropDownMenu";

const properties = {
  background: Colors.defaultPrimaryColor,
};

const NavBar = () => {
  const user = useSelector((state) => state.auth);
  return (
    <SuperContainer background={properties.background}>
      <Wrapper className="wrapper">
        <Container className="" width="auto">
          <Img src={Logo} alt="logo" />
          <NavMenu>
            {principalMenu.map((item, index) => (
              <Link key={index} to={item.path}>
                {item.label}
              </Link>
            ))}
          </NavMenu>
        </Container>
        <SearchBar />
        <Avatar user={user} />
        <DropDownMenu items={dropDownMenu} user={user} />
      </Wrapper>
    </SuperContainer>
  );
};

export default NavBar;
