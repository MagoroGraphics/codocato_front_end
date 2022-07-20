import React from 'react';
import styled from 'styled-components';


const ListProfileItemStyled = styled.li`
  display:flex;
  flex-direction:row;
  font-weight: bold;
  list-style-type: none;
  font-size: 2vh;
  color: #FFFFFF;
  cursor: pointer;
  font-family: 'Fresh-Steak';
  &:hover{
      background-color: #FCE74A;
      color: #FF6666;
  }
  &:focus{
      color: #FFFFFF ;
  }
  padding: 1.5vh;
  border-radius: 0.5vh;
`

const ProfileAvatarImageStyled = styled.img`
  max-height:5vh;
  margin:1vh;
`

const ProfileNameWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
`

const ProfileItem = ({profile, onProfileClick, setActive, active}) => {

  const handleClick = function(){
    setActive(profile.id)
    onProfileClick(profile);
    console.log(profile.id)
  }

  

  return (
  <>
    <ListProfileItemStyled 
      onClick={handleClick} 
      style={profile.id === active ? {backgroundColor: '#FF6666' , color:'white'} : null}
    > 
      <ProfileAvatarImageStyled src={`http://localhost:8080/${profile.avatar}`}/>
      <ProfileNameWrapper>{profile.name}</ProfileNameWrapper>
    </ListProfileItemStyled>
  </>
  )
}

export default ProfileItem;