import React, {useEffect} from "react"
import styled from "styled-components"
import Animation from "../components/Animation"

const LContainer = styled.div`
    background-image: ${props => `url(${props.bgimage})`};
    background-size: cover;
    height: 100vh;
    max-height: 100vh;
    width: 100vw;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
`

const GameAnimationContainer = ({appState, setAppState, currentLesson}) => {


useEffect(() => {
    const timer = setTimeout(() => {
        setAppState("GameContainer")
    }, 12010)
    return () => clearTimeout(timer);
    
}, [])


const handleClick = () => {
    setAppState("GameContainer")
}

return (
    <>
        <LContainer bgimage = {`http://localhost:8080/lesson_bgs/${currentLesson.bgImgUrl}`}>
            <Animation appState = {appState}/>
        </LContainer>
        <button onClick = {handleClick}>Continue</button>
    </>
)
}

export default GameAnimationContainer