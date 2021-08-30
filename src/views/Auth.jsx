import React from 'react'
import ImgAuth from '../components/auth/ImgAuth'

import '../assets/styles/login.css';
import { ContainerAuth } from "../assets/styles/auth-styles";

import LoginComp from '../components/auth/LoginComp'
import RegisterComp from '../components/auth/RegisterComp';

const Auth = () => {
    return (
        <ContainerAuth>
           {/* <LoginComp /> */}
           <ImgAuth />
           <RegisterComp />
        </ContainerAuth>
    )
}

export default Auth
