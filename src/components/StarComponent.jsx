import React, { useState } from 'react'
import { Container, START } from '../assets/styles/style'
 
const StarComponent = ({userRating, active}) => {
    const [rating, setRating] = useState(userRating)
    return (
        <Container
        justifyContent={"center"}
        >
            {
                [...Array(5)].map((star, i)=>{
                    const ratingValue = i + 1;
                    return(
                        <label key={i}>
                            <input
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                
                                onClick={() => active ? setRating(ratingValue) : null}
                                style={{"display" : "none"}}
                            />
                            <START 
                                color={ratingValue <= (rating) ? "#ffc107" : "#808080"}
                                size={25}
                            />
                        </label>
                    )
                })
            }
        </Container>
    )
}

export default StarComponent
