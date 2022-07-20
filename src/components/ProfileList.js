import React, { useState } from "react"
import ProfileItem from "./ProfileItem";
import { CurrentEnrollmentService } from "../services/Services";
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars-2';

const Column = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5vh;
    background-color: #38B6FF;
    border-radius:5vh 0vh 0vh 5vh;
    margin: 0.1vh;
    overflow: hidden ;
    max-height: 70vh;
`
const SelectProfileTitleStyled = styled.h3`
    color: #FCE74A;
    font-weight: bold;
    font-size:3vh;
    font-family: 'Fresh-Steak';
`

const ProfileList = ({ 
    savedProfiles, 
    setCurrentProfile, 
    setCurrentLesson, 
    setCurrentEnrollment 
}) => {

 const [active, setActive] = useState({})

    const onProfileClick = (currentProfile) => {

        setCurrentProfile(currentProfile)
        CurrentEnrollmentService.getcurrentEnrollment(currentProfile.id)
        .then((res) => {
            setCurrentEnrollment(res)
            setCurrentLesson(res.lesson)
        })

    }

    const profileNodes = savedProfiles.map((profile, index) => {
        return <ProfileItem 
            onProfileClick={onProfileClick} 
            profile={profile} 
            key={index} 
            active= {active} 
            setActive= {setActive} 
        />
    }
    )  
    

    return (
        <Column>
            
                <SelectProfileTitleStyled>OR SELECT YOUR PROFILE</SelectProfileTitleStyled>
                <Scrollbars>
                <ul>
                    {profileNodes}
                </ul>
            </Scrollbars>
        </Column>
    )
}

export default ProfileList;