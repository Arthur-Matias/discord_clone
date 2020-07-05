import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>
    
    useEffect(()=>{
        const div = messagesRef.current;

        if(div){
            div.scrollTop = div.scrollHeight;
        }
    })

    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) =>(
                    <ChannelMessage
                        key={n}
                        author="ygor360"
                        date="21/06/2020"
                        content="Hoje é o meu aniversário!"
                    />
                ))}

                <ChannelMessage
                    author="pips"
                    date="21/06/2020"
                    content={
                        <>
                            <Mention>@Arthur Matias</Mention>, me carrega no valorant véi, sou mto ruim, n aguento mais perder
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;