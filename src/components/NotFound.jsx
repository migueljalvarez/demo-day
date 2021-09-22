import React from 'react'
import { Container } from 'react-bootstrap'
import { ContainerSubTitle, Img, SuperContainer, Wrapper } from '../assets/styles/style'
import file from "../assets/svg/not-found.svg"

const NotFound = ({ description }) => {
    return (
        <SuperContainer>
            <Wrapper>
                <Container
                    direction="column"
                    style={{"textAlign": "center"}}
                    >
                        <Img src={file} size="50"
                        width="400px"/>
                    <ContainerSubTitle>{description}</ContainerSubTitle>
                </Container>
            </Wrapper>
        </SuperContainer>
    )
}

export default NotFound
