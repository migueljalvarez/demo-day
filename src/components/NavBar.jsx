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

import { useDispatch, useSelector } from "react-redux";
import Avatar from "./Avatar";
import DropDownMenu from "./DropDownMenu";
import { logout } from "../redux/actions/authActions";

const logo = "https://nrskarmakar.com/images/company-logo/default-logo.png";
const properties = {
  background: Colors.defaultPrimaryColor,
};

const NavBar = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth);
  return (
    <SuperContainer background={properties.background}>
      <Wrapper className="wrapper">
        <Container className="" width="auto">
          <Img src={logo} alt="logo" />
          <NavMenu>
            {principalMenu.map((item, index) => (
              <Link key={index} to={item.path}>
                {item.label}
              </Link>
            ))}
            <p onClick={() => dispatch(logout())}>
              logout
            </p>
          </NavMenu>
        </Container>
        <SearchBar />
        <Avatar user={user} width="40px" height="40px"/>
        <DropDownMenu items={dropDownMenu} user={user} />
      </Wrapper>
    </SuperContainer>
  );
};

export default NavBar;
