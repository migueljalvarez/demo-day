import React from 'react'
import { useSelector } from 'react-redux';
import { Colors, Container, Img } from '../assets/styles/style'
const cover = "https://fondosmil.com/fondo/9856.jpg";
const ServicesCard = () => {
    const user = useSelector(state => state.auth)

    return (
        <Container
            width={"350px"}
            padding={"0px"}
            flexDirection={"column"}
            background={Colors.dividerColor}
            radius="8px"
            shadow={"0px 8px 16px 0px rgba(0, 0, 0, 0.2)"}
        >
            <Container
                padding={"0px"}
                width={"100%"}
            >
                <Img
                    src={cover}
                    alt={"cover"}
                    width={"100%"}
                    height={"150px"}
                    margin={"0px"}
                    radius={"8px 8px 0px 0px"}
                />
            </Container>
            <Container
                padding={"0px"}
                background={Colors.defaultPrimaryColor}
                flexDirection={"column"}
                >
                    
                <Container

                    width={"350px"}
                    padding={"0px"}
                    position={"absolute"}
                    justifyContent={"center"}
                >
                    <Img
                        src={user.imageUrl}
                        position={"static"}
                        margin={"-80px 0px 0px 0px"}
                        radius={"100%"}
                    />

                    <h1>Username</h1>
                </Container>
                <Container
                    padding={"0px"}
                    width={"100%"}
                    height={"250px"}
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique magni, commodi quas nihil accusantium ipsa harum perferendis a! Quo soluta voluptas debitis aliquid eaque a vero excepturi dicta aspernatur minus!
                </Container>
            </Container>
        </Container>
    )
}

export default ServicesCard
