import React from "react";
import { Colors } from "../assets/styles/style";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import Avatar from "./Avatar";
import constants from "../helpers/constants";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/authActions";

const { LOGOUT } = constants;
const DropDownMenu = ({ user, items }) => {
  const dispatch = useDispatch()
  const handleLogout = ()=>{
    dispatch(logout())
  }
  return (
    <Dropdown style={{ alignSelf: "center" }}>
      <Avatar user={user} width="40px" height="40px" />
      <Dropdown.Toggle
        variant="default"
        style={{ color: Colors.textPrimaryColor }}
        id="dropdown-basic"
      >
        {user.name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {items.map((item, index) =>
          item.label === LOGOUT ? (
            <Dropdown.Item key={index} role="button" onClick={handleLogout}>
              {item.label}
            </Dropdown.Item>
          ) : (
            <Dropdown.Item key={index} as={Link} to={item.path}>
              {item.label}
            </Dropdown.Item>
          )
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDownMenu;
