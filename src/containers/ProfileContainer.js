import React from "react"
import NewProfileForm from "../components/NewProfileForm";
import ProfileList from "../components/ProfileList";
import styled from 'styled-components';


const GeneralContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #368DCE;
    height: 100vh;
    width:100vw;
    background-position: center;
    background-size: cover;
    font-family: 'Fresh-Steak'
`

const GridStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-size:cover;
`

const StartButtonStyled = styled.button`
    background-color: #FF6666;
    border-radius: 100%;
    margin:0;
    margin-right:5vw;
    padding: 3vh;
    font-size: 2vh;
    border:0px;
    color:#fff;
    font-size:6.5vh;
    font-family: 'Fresh-Steak';
    cursor:pointer;
    justify-item: left;
    &:hover{
        background-color: #FF3333;
        color: #fff;
    }
`

const StartButtonAligner = styled.div`
    display:flex;
    justify-content:flex-end;
    padding:2vh;
    background-color: #368DCE;
`

const ProfileContainer = ({
    savedProfiles, 
    setCurrentProfile, 
    addNewProfile, 
    setAppState, 
    setCurrentLesson, 
    currentLesson, 
    setCurrentEnrollment
}) => {

    const handleClick = () => {
        setAppState("AnimationContainer")
    }

    return (
        <GeneralContainer>
            <GridStyle>
                <NewProfileForm addNewProfile={addNewProfile}/>
                <ProfileList 
                    savedProfiles = {savedProfiles} 
                    setCurrentProfile = {setCurrentProfile}
                    setCurrentLesson = {setCurrentLesson} 
                    setCurrentEnrollment = {setCurrentEnrollment} 
                />
            </GridStyle>
            <StartButtonAligner>
                {currentLesson ? <StartButtonStyled onClick={handleClick}>Start</StartButtonStyled> : null}
            </StartButtonAligner>
        </GeneralContainer>
    )

}

export default ProfileContainer;