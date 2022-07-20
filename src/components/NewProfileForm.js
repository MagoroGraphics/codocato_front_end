import React, { useState } from "react"
import styled from 'styled-components';
import Avatar from "./Avatar"


const NewProfileColumn = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8vh 8vh 0vh 8vh;
    margin: auto;
    text-align:center;
`

const CreateButtonStyled = styled.input`
    background-color: #FF6666;
    border-radius: 100%;
    padding: 2vh;
    border:0px;
    cursor:pointer;
    margin: 0vh;
    font-family: 'Fresh-Steak';
    color:#fff;
    font-size:3vh;
    &:hover{
        background-color: #FF3333;
        color:#fff;
    }
`

const InputTextBoxStyled = styled.input`
    border-radius: 1vh;
    border-width: 1vh;
    border-color:#38B6FF;
    margin:3vh;
    width:30vh;
    height:5vh;
    font-family: 'Fresh-Steak';
    font-size:3vh;
`

const AvatarRadioStyled = styled.input`
    position: absolute;
    opacity: 0;
`

const AvatarImageSelectorStyled = styled.img`
    cursor:pointer;
    margin: 1vh;
    width:25vh;
    padding-left: 4vh;
    padding-right: 4vh;
`

const ChooseAvatarLabelStyled = styled.label`
    font-weight: bold;
    font-size: 3.5vh;
    color: #FCE74A;
    margin:0;
    padding:0;
`

const CreateProfileTitleStyled = styled.h2`
    color: #FCE74A;
    font-weight: bold;
    font-size: 5vh;
    padding:0;
    margin:0;
`

const RadioButtonsContainerStyled = styled.div`
    display:flex;
    flex-direction:row;
    margin:3vh;
`
const InputTextWrapper = styled.div`
    display:flex;
    justify-content:center;
`

const CreateButtonWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    padding:0;
    margin:0;
`

const CreateProfileTitleWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    padding:0;
    margin:0;
`

const ChooseAvatarTitleWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    padding:0;
    margin:0;
`

const AnimationBlock = styled.div`
    width: 13vw;
    padding: 0;
    margin: 0;
`

const NewProfileForm = ({ addNewProfile }) => {

    const [name, setName] = useState("")
    const [avatar, setAvatar] = useState("")

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleAvatarChange = (event) => {
        setAvatar(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newProfile = {
            "name": name,
            "avatar": avatar
        }
        addNewProfile(newProfile)
        setName("")
        setAvatar("")
        event.target.reset()
    }

    return (
        <NewProfileColumn>

            <CreateProfileTitleWrapper>
                <CreateProfileTitleStyled>Join the dojo</CreateProfileTitleStyled>
            </CreateProfileTitleWrapper>
            <form onSubmit={handleSubmit}>

                <InputTextWrapper>
                    <InputTextBoxStyled type="text" placeholder="your name" onChange={handleNameChange} required />
                </InputTextWrapper>
                <div>
                    <ChooseAvatarTitleWrapper>
                        <ChooseAvatarLabelStyled>Choose your style:</ChooseAvatarLabelStyled><br />
                    </ChooseAvatarTitleWrapper>

                    <RadioButtonsContainerStyled>

                        <label>
                            <AvatarRadioStyled type="radio" name="avatar" value="codocato-avatar1.svg" onChange={handleAvatarChange} required />
                            <Avatar avatar="avatar1" />
                            <AnimationBlock id="animation1" />
                        </label>

                        <label>
                            <AvatarRadioStyled type="radio" name="avatar" value="codocato-avatar2.svg" onChange={handleAvatarChange} required />
                            <Avatar avatar="avatar2" />
                            <AnimationBlock id="animation2" />

                        </label>

                        <label>
                            <AvatarRadioStyled type="radio" name="avatar" value="codocato-avatar3.svg" onChange={handleAvatarChange} required />
                            <Avatar avatar="avatar3" />
                            <AnimationBlock id="animation3" />
                        </label>

                    </RadioButtonsContainerStyled>
                </div>

                <CreateButtonWrapper>
                    <CreateButtonStyled type="submit" value="CREATE" />
                </CreateButtonWrapper>
            </form>
        </NewProfileColumn>
    )
}

export default NewProfileForm;