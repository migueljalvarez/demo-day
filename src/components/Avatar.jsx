import React from "react";
import { Img } from "../assets/styles/style";
import constants from "../helpers/constants";
const { DEFAULT_AVATAR_IMAGES } = constants;
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
        src={user?.imageUrl || DEFAULT_AVATAR_IMAGES}
        alt={user?.name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = DEFAULT_AVATAR_IMAGES;
        }}
      />
    </>
  );
};

export default Avatar;
