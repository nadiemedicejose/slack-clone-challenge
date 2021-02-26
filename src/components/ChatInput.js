import React, { useState } from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';

function ChatInput({ sendMessage, props }) {

    const [input, setInput] = useState("");

    const send = (e) => {
        e.preventDefault();
        if(!input) return;
        sendMessage(input);
        setInput("");
    }

    return (
        <Container>
            <InputContainer>
                <form>
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        value={input}
                        placeholder="Message here..." />
                    <SendButton
                        type="submit"
                        onClick={send}>
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
    border: 1px solid ${(props) => props.theme.colors.inputBorder};
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
            background: transparent;
            color: ${(props) => props.theme.colors.inputTextColor};
        }

        input: focus {
            outline: none;
        }
    }
`

const SendButton = styled.button`
    background: ${(props) => props.theme.colors.sendButtonBackground};
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;
    border: none;

    .MuiSvgIcon-root {
        width: 18px;
    }

    :hover {
        background: ${(props) => props.theme.colors.sendButtonBackgroundHover};
    }
`

const Send = styled(SendIcon)`
    color: ${(props) => props.theme.colors.sendIconColor};
`

const TextFormat = styled.div`
    background: ${(props) => props.theme.colors.textFormatBtnBackground};
    border-top: 1px solid ${(props) => props.theme.colors.textFormatBtnBorder};
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
        background: ${(props) => props.theme.colors.formatButttonBackgroundHover};
    }
`

const BoldIcon = styled(FormatBoldIcon)`
    color: ${(props) => props.theme.colors.iconColor};

    :hover {
        color: ${(props) => props.theme.colors.iconColorHover};
    }
`

const ItalicIcon = styled(FormatItalicIcon)`
    color: ${(props) => props.theme.colors.iconColor};

    :hover {
        color: ${(props) => props.theme.colors.iconColorHover};
    }
`

const UnderlinedIcon = styled(FormatUnderlinedIcon)`
    color: ${(props) => props.theme.colors.iconColor};

    :hover {
        color: ${(props) => props.theme.colors.iconColorHover};
    }
`

const StrikethroughIcon = styled(StrikethroughSIcon)`
    color: ${(props) => props.theme.colors.iconColor};

    :hover {
        color: ${(props) => props.theme.colors.iconColorHover};
    }
`
