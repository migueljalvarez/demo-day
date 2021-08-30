import React from "react";
import { Img } from "../assets/styles/style";
const Avatar = ({ user, width, height, position, margin, border, self }) => {
  return (
    <>
      <Img
        className=""
        width={width}
        height={height}
        radius="50%"
        position={position}
        margin={margin}
        border={border}
        self={self}
        src={user.imageUrl}
        alt={user.name}
      />
    </>
  );
};

export default Avatar;
