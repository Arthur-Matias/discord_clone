import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps{
    nickname: string;
    isBot?:boolean;
    isActive?:boolean;
}

const UserRow: React.FC<UserProps> = ({
    nickname,
    isBot,
    isActive
}) => {
    return (
        <User>
            <Avatar className={isBot? 'bot':isActive?"active":""}/>
            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>

            <UserRow nickname="Bot Master" isBot/>
            <UserRow nickname="Arthur Matias" isActive={true}/>
            <UserRow nickname="Ygor" isActive={true}/>
            <UserRow nickname="Pips" isActive={true}/>

            <Role>Offline - 19</Role>
            <UserRow nickname="Jacira" />
            <UserRow nickname="Rose" />
            <UserRow nickname="Eliza" />
            <UserRow nickname="Guga" />
            <UserRow nickname="Joelson" />
            <UserRow nickname="Claudinei" />
            <UserRow nickname="Chris" />
            <UserRow nickname="TitanMk" />
            <UserRow nickname="marinho" />
            
        </Container>
    )
};

export default UserList;