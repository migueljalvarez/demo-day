import React from 'react';
import History from '../components/About/History';
import Banner from '../components/About/Banner';
import {
    Container,
    SuperContainer,
    Wrapper,
} from "../assets/styles/style";
import WeOffer from '../components/About/WeOffer';




const About = () => {
    return (
        <SuperContainer>

            <Wrapper>
                <Container>
                    <Banner />
                    <History />
                    <WeOffer />


                </Container>
            </Wrapper>
        </SuperContainer>
    );
}

export default About;