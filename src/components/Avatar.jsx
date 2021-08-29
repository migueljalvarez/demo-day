import React from 'react'
import { Img } from '../assets/styles/style'
const Avatar = ({user}) => {
  return (
    <>
      <Img
          className="rounded-circle mx-1"
          width="40px"
          height="40px"
          radius="50%"
          src={user.imageUrl}
          alt={user.name}
        />
    </>
  )
}

export default Avatar
