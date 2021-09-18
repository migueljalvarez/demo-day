import React from 'react';
import HowWorks from '../components/About/HowWorksService';
import StartStepsServices from '../components/About/StartStepsServices';
import ButtonAbout from '../components/ButtonAbout';
import {
    Container,
    SuperContainer,
    Wrapper,
  } from "../assets/styles/style";



  
  const About = () => {
    return (
<SuperContainer>
    
    <Wrapper>
    <Container>
        <HowWorks />
        <ButtonAbout />
        <StartStepsServices />
        
    </Container>
    </Wrapper>
</SuperContainer>
    );
}

export default About;