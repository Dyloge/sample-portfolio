import React from 'react';
import styled from 'styled-components';
import HomeButton from '../subComponents/HomeButton';
import SocialIcons from '../subComponents/SocialIcons';

function BlogPage() {
  return (
    <MainContainer>
      <Container>
        <HomeButton />
        <SocialIcons />
      </Container>
    </MainContainer>
  );
}

export default BlogPage;

//-----Styled Components-----
const MainContainer = styled.div`
  background-color: rgb(40, 44, 52);
  width: 100vw;
  height: 100vh;
`;
const Container = styled.div`
  background-color: rgb(33, 37, 43);
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;
