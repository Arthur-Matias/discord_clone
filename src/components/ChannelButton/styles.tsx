import styled from "styled-components";
import { Hashtag } from 'styled-icons/heroicons-outline';
import {PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;

  transition: background-color 100ms;

  > div{
    display: flex;
    align-items: center;
  }
  >div span{
    margin-left: 5px;
    color: var(--senary);
  }

  &:hover, &.active {
    background-color: var(--quinary);
    >div span{
      color: var(--white);
    }
    >div svg{
      opacity: 1;
    }
  }

`;

export const HashtagIcon = styled(Hashtag)`
  display: block !important;
  width: 20px;
  height: 20px;

  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;
  
  color: var(--symbol);
  cursor: pointer;

  opacity: 0;
  transition: opacity 100ms;

  &:hover{
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
width: 16px;
height: 16px;
margin-left: 3px;
opacity: 0;

color: var(--symbol);
cursor: pointer;

transition: opacity 100ms;

&:hover{
  color: var(--white);
}
`;