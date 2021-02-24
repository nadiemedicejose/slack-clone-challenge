import React from 'react'
import styled from 'styled-components'
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function Chat() {
    return (
        <Container>
            <MainContainer>
                <FavoriteIcon />
                <RoomName>People & Groups</RoomName>
                <StarOutlineIcon />
            </MainContainer>
            <InfoContainer>
                <InfoOutlinedIcon />
            </InfoContainer>
        </Container>
    )
}

export default Chat

const Container = styled.div`
    background: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid #532753;
`

const MainContainer = styled.div`
    color: #343a40;
    display: flex;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    font-weight: bold;
`

const RoomName = styled.div`
    margin-left: 4px;
    margin-right: 6px;
`

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    margin-left: 19px;
    margin-right: 12px;
    padding: 10px;
    cursor: pointer;
    color: #343a40;
    fill: #343a40;
    :hover {
        background: #F6F6F6;
        border-radius: 4px;
    }
`
