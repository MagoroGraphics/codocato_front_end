import React, { useState} from "react"
import styled from "styled-components"
import Prompt from "../components/Prompt"
import ScoreStar from "../components/ScoreStar"
import Modal from "react-modal"

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
const StarContainer = styled.div`
    width: 40vw;
    margin: auto;
`

const PromptContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

const Button = styled.button`
    position: relative;
    left: 75vw;
    top: 65vh;
    background-color: #368DCE;
    border-radius: 100%;
    padding: 6vh;
    border:0px;
    cursor:pointer;
    margin: 0vh;
    font-family: 'Fresh-Steak';
    color:#fff;
    font-size:5vh;
    &:hover{
        background-color: #1267a8;
        color:#fff;
    }
`

const LessonContainer = ({ currentLesson, setAppState }) => {



    const [clickedPrompts, setClickedPrompts] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);

    // useEffect(() => {
    //     if (clickedPrompts.length == 4) {
    //         setIsModalOpen(true)
    //     }
    // }, [clickedPrompts])


    const promptNodes = currentLesson.prompts.map((prompt, index) => {
        return (
        <Prompt 
            prompt={prompt} 
            setClickedPrompts={setClickedPrompts} 
            clickedPrompts={clickedPrompts} 
            key={index} 
        />
        )
    })

    const handleClick = () => {
        setIsModalOpen(true)
    }

    return (
        <>


            <LContainer bgimage={`http://localhost:8080/lesson_bgs/${currentLesson.bgImgUrl}`}>
                <PromptContainer>
                    {promptNodes}
                </PromptContainer>

                <div>
                    {clickedPrompts.length ==4? <Button onClick = {handleClick}>continue</Button> : null}
                </div>
            </LContainer>

            <Modal
                isOpen={isModalOpen}
                ariaHideApp={false}
                contentLabel="User options"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0,0,0, 0.5)',
                        overflow: "hidden"
                    },
                    content: {
                        backgroundColor: 'rgba(255, 255, 255, 0)',
                        border: 0,
                        overflow: "hidden"
                    }
                }}
            >
                <StarContainer>
                    {clickedPrompts.length == 4 ? 
                    <ScoreStar 
                        setAppState={setAppState} 
                        nextState = "GameAnimationContainer" 
                    /> : null}
                </StarContainer>
            </Modal>
        </>
    )
}

export default LessonContainer