import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';

function ChatInput() {
    return (
        <Container>
            <InputContainer>
                <form>
                    <input type="text" placeholder="Message here..." />
                    <SendButton>
                        <Send />
                    </SendButton>
                </form>
                <TextFormat>
                    <FormatButton>
                        <BoldIcon />
                    </FormatButton>
                    <FormatButton>
                        <ItalicIcon />
                    </FormatButton>
                    <FormatButton>
                        <UnderlinedIcon />
                    </FormatButton>
                    <FormatButton>
                        <StrikethroughIcon />
                    </FormatButton>
                </TextFormat>
            </InputContainer>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
`

const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;

    form {
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;

        input {
            flex: 1;
            border: none;
            font-size: 13px;
        }

        input: focus {
            outline: none;
        }
    }
`

const SendButton = styled.div`
    background: #007a5a;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;

    .MuiSvgIcon-root {
        width: 18px;
    }

    :hover {
        background: #148567;
    }
`

const Send = styled(SendIcon)`
    color: #D9D9D9;
`

const TextFormat = styled.div`
    background: #f8f8f8;
    border-top: 1px solid #e1e1e1;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    height: 32px;
    display: flex;
    justify-content: left;
`

const FormatButton = styled.div`
    background: transparent;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;

    .MuiSvgIcon-root {
        width: 16px;
    }

    :hover {
        background: #efefef;
    }
`

const BoldIcon = styled(FormatBoldIcon)`
    color: #606060;

    :hover {
        color: #1d1c1d;
    }
`

const ItalicIcon = styled(FormatItalicIcon)`
    color: #606060;

    :hover {
        color: #1d1c1d;
    }
`

const UnderlinedIcon = styled(FormatUnderlinedIcon)`
    color: #606060;

    :hover {
        color: #1d1c1d;
    }
`

const StrikethroughIcon = styled(StrikethroughSIcon)`
    color: #606060;

    :hover {
        color: #1d1c1d;
    }
`