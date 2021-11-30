import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HomeButtonIcon } from '../components/AllSvgs';

function HomeButton() {
  return (
    <HButton>
      <NavLink to='/'>
        <HomeButtonIcon width={40} height={40} fill='#24292F' />
      </NavLink>
    </HButton>
  );
}

export default HomeButton;

//-----Styled Components-----

const HButton = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;
  background-color: ${(props) => props.theme.body};
  padding: 0%.3rem;
  border-radius: 50%;
  border: 0.01px solid ${(props) => props.theme.body};
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5000;
  &:hover {
    filter: blur(1px);
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;
