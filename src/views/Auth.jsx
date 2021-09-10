import React from 'react'
import ImgAuth from '../components/auth/ImgAuth'

import { Container } from "../assets/styles/style";

import LoginComp from '../components/auth/LoginComp'
import RegisterComp from '../components/auth/RegisterComp';

const Auth = () => {
    return (
        <Container>
           {/* <LoginComp /> */}
           <ImgAuth />
           <RegisterComp />
        </Container>
    )
}

export default Auth
