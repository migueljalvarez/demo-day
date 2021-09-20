import React, {useEffect, useState } from "react";
import {
  Colors,
  Container,
  SuperContainer,
  Wrapper,
} from "../assets/styles/style";
import ServicesCard from "../components/ServicesCard";
import SearchService from "../components/SearchService";
import { useSelector } from "react-redux";
const properties = {
  containerMain: {
    direction: "column",
  },
  containerButton: {
    justifyContent: "space-around",
  },
  containerCard: {
    justifyContent: "center",
    padding: "10px 0px",
  },
  button: {
    background: Colors.accentColor,
    color: Colors.textPrimaryColor,
    width: "40%",
  },
};

const Services = () => {

  const allServices = useSelector(state => state.services)
  const {title, location, services} = useSelector(state => state.search)

  const [serviceList, setserviceList] = useState([])

  useEffect(() => {
    
    if(services.length > 0){
      setserviceList(services)
    }else{
      setserviceList(allServices)
    }
    
  }, [services, allServices])

  return (
    <>
      <SuperContainer>
        <Wrapper>
          <Container direction={properties.containerMain.direction}>
          <SearchService />
            <Container
              justifyContent={properties.containerCard.justifyContent}
              padding={properties.containerCard.padding}
              direction={"column"}
              alignItems={"center"}
            >
              {
                (serviceList.length > 0) ?

                (services.length === 0 && title !== "") ? <Container>No hay resultados para "{title}"" en {location.charAt(0).toUpperCase()+location.slice(1)}</Container> :
                serviceList.map((service) =>(
                  <ServicesCard key={service._id} service={service} info={true}/>
                ))
                :
                <Container>No hay servicios disponibles</Container>
              }
              
            </Container>
          </Container>
        </Wrapper>
      </SuperContainer>
    </>
  );
};

export default Services;
