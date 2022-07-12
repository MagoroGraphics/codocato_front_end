import React, { useEffect, useState } from "react"
import Goal from "../components/Goal"
import GamePrompt from "../components/GamePrompt"
import styled from "styled-components"
import ScoreStar from "../components/ScoreStar"
import Modal from "react-modal"

const Wrapper = styled.div`
background-image: repeating-linear-gradient(45deg, #eec43b 0, #eec43b 2.5px, transparent 0, transparent 50%);
background-size: 16px 16px;
background-color: #f4eedc;
height: 100vh;
width: 100vw;
display: flex;

`

const GameWrapper = styled.div`
padding-top: 20vh;
max-width: 50vw;
margin: auto;
border: solid 2vw #368DCE;
border-radius: 5vw;
background-color: #FF6666;
display: flex;
justify-content: center;
padding: 10vh;

`

const StarContainer = styled.div`
    width: 40vw;
    margin: auto;
`

const NodeContainer = styled.div`
display: flex;
max-width: 40vw;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
align-content: center;
gap: 5vw;
row-gap: 20vh;
`

const GameContainer = ({ setAppState, updateCurrentLesson, currentLesson }) => {

    const [selectedPrompt, setSelectedPrompt] = useState(null)
    const [selectedGoal, setSelectedGoal] = useState(null)
    const [completed, setCompleted] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (selectedGoal != null && selectedPrompt != null) {
            checkCorrect()
        }
    }, [selectedGoal, selectedPrompt])

    useEffect(() => {
        if (completed.length == 4){
            setIsModalOpen(true)
        }   
     }, [completed])


    const checkCorrect = () => {
        if (selectedPrompt == selectedGoal) {
            if (!completed.includes(selectedPrompt)) {
                const temp = [...completed, selectedPrompt]
                setCompleted(temp)
            }
        }
    }


    const promptsAndGoals = []

    currentLesson.prompts.map((prompt, index) => {
        const newPrompt = <GamePrompt prompt={prompt} id="prompt" grid-area="b" setSelectedPrompt={setSelectedPrompt} completed = {completed} />
        promptsAndGoals.unshift(newPrompt)

        const newGoal = <Goal prompt={prompt} id="prompt" grid-area="a" setSelectedGoal=
            {setSelectedGoal} completed={completed} />

        promptsAndGoals.push(newGoal)
    })




    const promptsAndGoalsNodes = promptsAndGoals.map((item, index) => {
        return item
    })

    const handleClick = () => {
        updateCurrentLesson()
        setAppState("GameWinAnimationContainer")
    }


    return (
        <>
        <Modal
                isOpen={isModalOpen}
                ariaHideApp={false}
                contentLabel="User options"
                style = {{
                    overlay: {
                        backgroundColor: 'rgba(0,0,0, 0.5)'
                    },
                    content: {
                        backgroundColor: 'rgba(255, 255, 255, 0)',
                        border: 0,
                    }
                }}
            >
                    <StarContainer onClick = {handleClick}>
                    {completed.length == 4 ? <ScoreStar setAppState={setAppState} nextState = "GameWinAnimationContainer" /> : null}
                    </StarContainer>
            </Modal>
            <Wrapper>
                <GameWrapper>
                    <NodeContainer>
                        {promptsAndGoalsNodes}
                    </NodeContainer>
                </GameWrapper>

            </Wrapper>
        </>
    )
}

export default GameContainer;