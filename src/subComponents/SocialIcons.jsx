import React from 'react';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '../components/AllSvgs';
import { About } from '../components/AllSvgs';
import { MySkills } from '../components/AllSvgs';
import { Works } from '../components/AllSvgs';
import { Blog } from '../components/AllSvgs';

function SocialIcons() {
  return (
    <Icons>
      <GithubIcon>
        <NavLink target='_blank' to={{ pathname: 'https://github.com/Dyloge' }}>
          <Github width={30} height={30} fill='#2a2f24' />
        </NavLink>
      </GithubIcon>
      <AboutIcon>
        <NavLink to='/about'>
          <About width={30} height={30} fill='#2a2f24' />
        </NavLink>
      </AboutIcon>
      <MySkillsIcon>
        <NavLink to='/skills'>
          <MySkills width={30} height={30} fill='#2a2f24' />
        </NavLink>
      </MySkillsIcon>
      <WorksIcon>
        <NavLink to='/work'>
          <Works width={30} height={30} fill='#2a2f24' />
        </NavLink>
      </WorksIcon>
      <BlogIcon>
        <NavLink to='/blog'>
          <Blog width={30} height={30} fill='#2a2f24' />
        </NavLink>
      </BlogIcon>
      <Line />
    </Icons>
  );
}

export default SocialIcons;

//-----Styled Components-----
const Icons = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 70px;
  left: 2rem;
  z-index: 3;
`;

const GithubIcon = styled.div`
  left: 2rem;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  &:hover {
    filter: blur(1px);
  }
`;
const AboutIcon = styled(GithubIcon)`
  margin: 5px 0 5px 0;
`;
const MySkillsIcon = styled(GithubIcon)`
  margin: 5px 0 5px 0;
`;
const WorksIcon = styled(GithubIcon)`
  margin: 5px 0 5px 0;
`;
const BlogIcon = styled(GithubIcon)`
  margin: 0;
`;

const Line = styled.span`
  border-left: 1px dashed ${(props) => props.theme.text};
  height: 200px;
  position: relative;
  left: 50%;
  margin-left: -3px;
  bottom: 0;
`;
