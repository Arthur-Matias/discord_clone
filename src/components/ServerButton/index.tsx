import React from 'react';

import { Button } from './styles';

import Discord from '../../assets/Discord-Logo-White.svg';

export interface Props{
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?:number;
}

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions
}) => {
    return (
        <Button
            isHome={isHome}
            hasNotifications = {hasNotifications}
            mentions={mentions}
            className={selected ? 'active' : ''}
            >
            {isHome && <img src={Discord} alt="Discord logo" />}
        </Button>
    )
};

export default ServerButton;
