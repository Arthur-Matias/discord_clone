import React, {KeyboardEvent, useRef, useEffect, useState } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(()=>{
        const div = messagesRef.current;

        if(div){
            div.scrollTop = div.scrollHeight;
        }
    })
    let messageList = [
        {
            author: "Bot Master",
            date: "19/06/2020",
            content: "Bem Vindos ao Servidor do Arthur",
            isBot: true,
            hasMention: false,
            mentionTo: "",
        },
        {
            author: "ygor",
            date: "20/06/2020",
            content: "Salve",
            isBot: false,
            hasMention: false,
            mentionTo: "",
        },
        {
            author: "pips",
            date: "21/06/2020",
            content: "Salvee",
            isBot: false,
            hasMention: false,
            mentionTo: "",
        },

    ];

    return (
        <Container>
            <Messages ref={messagesRef}>
                {messageList.map(message=>{
                    return <ChannelMessage
                        author={message.author}
                        date={message.date}
                        content={message.content}
                        isBot={message.isBot}
                        hasMention={message.hasMention}
                    />
                })}
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;