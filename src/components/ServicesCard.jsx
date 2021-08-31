import React from 'react'
import { CardBody, CardContainer, Name, ProfileImage } from '../assets/styles/styleServices'

const props = {
    align: "center"
}

const ServicesCard = () => {
    return (
        <CardContainer>
            <ProfileImage />
            <CardBody>
                <Name align={props.align}>Username</Name>
                <Name>Data</Name>
            </CardBody>
        </CardContainer>
    )
}

export default ServicesCard
