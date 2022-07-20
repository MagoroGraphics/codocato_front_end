import React, {useEffect} from "react"
import styled from "styled-components"
import Animation from "../components/Animation"

const LContainer = styled.div`
    background-color: #368DCE;
    background-size: cover;
    height: 100vh;
    max-height: 100vh;
    width: 100vw;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
`

const GameWinAnimationContainer = ({appState, setAppState, }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            setAppState("LessonContainer")
        }, 16000)
        return () => clearTimeout(timer);
        
    }, [])

    const handleClick = () => {
        setAppState("LessonContainer")
    }
    
    return (
        <>
            <LContainer >
                <Animation appState = {appState}/>
            </LContainer>
            <button onClick = {handleClick}>Continue</button>
        </>
    )
}

export default GameWinAnimationContainer