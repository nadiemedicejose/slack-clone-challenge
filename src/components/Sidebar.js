import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import {sidebarItemsData} from '../data/SidebarData'
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase'
import { useHistory } from 'react-router-dom'

function Sidebar(props) {

    const history = useHistory();

    const goToChannel = (id) => {
        if (id) {
            history.push(`/room/${id}`)
        }
    }
    
    const addChannel = () => {
        const promptName = prompt("Enter channel name");
        if(promptName) {
            db.collection('rooms').add({
                name: promptName
            })
        }
    }

    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    CleverProgrammer
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                {
                    sidebarItemsData.map(item => (
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }
                
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddIcon onClick={addChannel} />
                </NewChannelContainer>
                <ChannelsList>
                    {
                        props.rooms.map(item => (
                            <Channel onClick={() => goToChannel(item.id)} >
                                # {item.name}
                            </Channel>
                        ))
                    }
                </ChannelsList>
            </ChannelsContainer>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
    background: ${(props) => props.theme.colors.sidebarBackground};
`

const WorkspaceContainer = styled.div`
    color: ${(props) => props.theme.colors.defaultColor};
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid ${(props) => props.theme.colors.borderBottom};
`

const Name = styled.div`
    font-weight: 700;
`

const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    background: ${(props) => props.theme.colors.newMessageBtnColor};
    color: ${(props) => props.theme.colors.colorAndFill};
    fill: ${(props) => props.theme.colors.colorAndFill};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
`

const MainChannels = styled.div`
    padding-top: 20px;
`

const MainChannelItem = styled.div`
    color: ${(props) => props.theme.colors.sidebarText};
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: ${(props) => props.theme.colors.sidebarHover};
    }
`

const ChannelsContainer = styled.div`
    color: ${(props) => props.theme.colors.sidebarText};
    margin-top: 10px;
`

const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding-left: 19px;
    padding-right: 12px;
    cursor: pointer;
`

const ChannelsList = styled.div``

const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: ${(props) => props.theme.colors.sidebarHover};
    }
`