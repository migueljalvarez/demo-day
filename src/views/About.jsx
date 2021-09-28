import React from 'react';
import History from '../components/About/History';
import Banner from '../components/About/Banner';
import {
    Container,
    SuperContainer,
    Wrapper,
} from "../assets/styles/style";
import WeOffer from '../components/About/WeOffer';
import Benefits from '../components/About/Benefits';




const About = () => {
    return (
        <SuperContainer>

            <Wrapper>
                <Container>
                    <Banner />
                    <History />
                    <WeOffer />
                    <Benefits />
                </Container>
            </Wrapper>
        </SuperContainer>
    );
}

export default About;