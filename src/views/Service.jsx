import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { SuperContainer, Wrapper, Container } from '../assets/styles/style';
import { getService } from '../services/service';
import { getProfile } from '../services/user';
import Card from "../components/Card";
import ServicesCard from '../components/ServicesCard';


const Service = () => {
    const params = useParams();
    const currentService = useSelector((state) => state.service);
    const currentUser = useSelector((state) => state.user);

    const [service, setService] = useState(currentService);
    const [user, setUser] = useState(currentUser);

    const [loading, setLoading] = useState(true);



    useEffect(() => {
        getService(params.id)
            .then((service) => {
                setService(service)
                getProfile(service.user)
                    .then((user) => {
                        setUser(user);
                    })
                    .catch((err) => { });
                setLoading(false)
            })
            .catch((err) => { });
        if (loading) {
            setService(currentService);
            setUser(currentUser)
        }
    }, [params, loading, currentService, currentUser]);

    return (
        <div>
            <SuperContainer>
                <Wrapper justifyContent="center">
                    <Container justifyContent="center">
                        <ServicesCard service={service} info={false}/>
                        <Card user={user} />
                    </Container>
                </Wrapper>
            </SuperContainer>
        </div>
    )
}

export default Service
