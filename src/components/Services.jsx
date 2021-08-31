import React from 'react'
import {Colors, Container } from '../assets/styles/style'
import { Button } from '../assets/styles/styleServices';
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

            <main>
                <ServicesCard />
            </main>
        </div>
    )
}

export default Services
