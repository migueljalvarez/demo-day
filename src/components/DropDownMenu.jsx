import React, { useState } from "react";
import {
  DropDown,
  DropDownMenu as Menu,
  Button,
  Colors,
} from "../assets/styles/style";
import { Link } from "react-router-dom";
import { FaSortDown } from "react-icons/fa";

const DropDownMenu = ({ user, items }) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const handleDropDown = () => {
    setIsDropDown(!isDropDown);
  };
  return (
    <DropDown background="transparent" padding="6px">
      <Button
        background="transparent"
        color={Colors.textPrimaryColor}
        padding="6px"
        onClick={handleDropDown}
      >
        {user.name} <FaSortDown />
      </Button>
      <Menu display={isDropDown ? "flex" : "none"} direction="column">
        {items.map((item, index) => (
          <Link key={index} to={item.path}>
            {item.label}
          </Link>
        ))}
      </Menu>
    </DropDown>
  );
};

export default DropDownMenu;
