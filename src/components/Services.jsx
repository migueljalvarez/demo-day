import React from 'react'
import {Button, Colors, Container, SuperContainer } from '../assets/styles/style'
import ServicesCard from './ServicesCard';

const properties = {
    background: Colors.darkPrimaryColor,
    justifyContent: "space-around",
    width: "40%"
};

const Services = () => {
    return (
        <div>
            <Container justifyContent={properties.justifyContent}>
                <Button width={properties.width} background={properties.background}>Añadir servicios</Button>
                <Button width={properties.width} background={properties.background}>Buscar servicios</Button>
            </Container>

            <SuperContainer>
                <ServicesCard />
            </SuperContainer>
        </div>
    )
}

export default Services
