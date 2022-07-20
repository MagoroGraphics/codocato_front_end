import React, {useEffect} from "react";
import styled from "styled-components"
import IntroAnimation from "../components/IntroAnimation"

const LContainer = styled.div`
    ${'' /* background-image: ${props => `url(${props.bgimage})`}; */}
    background-size: cover;
    height: 100vh;
    max-height: 100vh;
    width: 100vw;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    background-color:#368DCE;
`

const IntroAnimationContainer = ({setAppState}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            setAppState("ProfileContainer")
        }, 6000)
        return () => clearTimeout(timer);
        
    }, [])

    return(
        <>
            <LContainer bgimage = {`http://localhost:8080/animation/codocato-titles.json}`}>
                <IntroAnimation/>
            </LContainer>
        </>
    )
}

export default IntroAnimationContainer