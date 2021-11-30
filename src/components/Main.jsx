import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import emailjs from 'emailjs-com';
import Backgrounds from '../assets/Images/background.jpg';
import VisitCard from './VisitCard';
import { Email } from './AllSvgs';
import { Snowflake } from './AllSvgs';
import styled, { keyframes } from 'styled-components';
import HomeButton from '../subComponents/HomeButton';
import SocialIcons from '../subComponents/SocialIcons';
import SnowParticleBackground from './SnowParticlesBackground';

const Main = () => {
  const [isSent, setIsSent] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [clickSnow, setClickSnow] = useState(false);
  const handleClickSnow = () => setClickSnow(!clickSnow);
  const openEmail = () => {
    setIsEmailOpen(!isEmailOpen);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_j42vz4g',
        'template_x8qhrza',
        e.target,
        'user_vnQeXrNvZjvnwBqNduTkV'
      )
      .then(
        () => {
          setIsSent(true);
          setIsEmailOpen(true);
        },
        (error) => {
          console.log(error.text);
          setIsSent(false);
        }
      );
  };

  return (
    <MainContainer style={{ backgroundImage: `url(${Backgrounds})` }}>
      {clickSnow ? <VisitCard /> : null}
      <SnowParticleBackground />

      <Container>
        <HomeButton />
        <SocialIcons />

        <Center click={clickSnow}>
          <Snowflake
            onClick={handleClickSnow}
            width={clickSnow ? 40 : 100}
            height={clickSnow ? 40 : 100}
            fill='rgba(19, 18, 18, 0.7)'
          />
        </Center>
        <Popup
          onClick={openEmail}
          trigger={
            <ContactButton>
              <Email width={30} height={30} fill='#24292F' />
            </ContactButton>
          }
          position='right center'>
          <FormContainer>
            <Form id='contact' action='' method='post' onSubmit={sendEmail}>
              <FieldSet>
                <Input
                  name='name'
                  placeholder='Your name'
                  type='text'
                  tabindex='1'
                  required
                  autofocus
                />
              </FieldSet>
              <FieldSet>
                <Input
                  name='user_email'
                  placeholder='Your Email Address'
                  type='email'
                  tabindex='2'
                  required
                />
              </FieldSet>
              <FieldSet>
                <TextArea
                  name='message'
                  placeholder='Type your Message Here....'
                  tabindex='5'
                  required></TextArea>
              </FieldSet>
              <FieldSet>
                <SendButton
                  name='submit'
                  type='submit'
                  id='contact-submit'
                  data-submit='...Sending'
                  style={
                    isSent && isEmailOpen
                      ? {
                          backgroundColor: 'rgba(0, 0, 0, 0.1)',
                          borderStyle: 'none',
                          color: '#414141',
                        }
                      : { backgroundColor: '#414141' }
                  }>
                  {isSent && isEmailOpen ? 'Message Sent' : 'Send'}
                </SendButton>
              </FieldSet>
            </Form>
          </FormContainer>
        </Popup>
      </Container>
    </MainContainer>
  );
};

export default Main;

//-----Styled Components-----

//-----Animations-----
const rotate = keyframes`
from {
  transform: rotate(0);
}
to {
  transform: rotate(360deg);
}
`;
//--------------
const MainContainer = styled.div`
  background-size: cover;
  width: 110vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`;
const Container = styled.div`
  padding: 2rem;
`;
const ContactButton = styled.button`
  position: fixed;
  top: 2rem;
  left: 2rem;
  border-radius: 50%;
  border-color: transparent;
  cursor: pointer;
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

const FormContainer = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  body {
    font-weight: 300;
    font-size: 12px;
    line-height: 30px;
    color: #777;
  }
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  position: fixed;
  top: 2rem;
`;

const Form = styled.form`
  padding: 50px;
  margin: 50px 30px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  backdrop-filter: blur(10px);
  border: 1px solid transparent;
  background-clip: padding-box;
`;
const FieldSet = styled.fieldset`
  border: inherit;
  min-width: 100%;
  padding: 3px;
  width: 100%;
`;
const TextArea = styled.textarea`
  width: 100%;
  background-color: rgba(19, 18, 18, 0.1);
  border-radius: 5px;
  border: 1px solid transparent;
  background-clip: padding-box;
  margin-top: 20px;
  padding: 20px;
  &:focus {
    outline: 0;
    border: 1px solid transparent;
  }
  &:hover {
    -webkit-transition: border-color 0.3s ease-in-out;
    -moz-transition: border-color 0.3s ease-in-out;
    transition: border-color 0.3s ease-in-out;
    border: 1px solid #aaa;
  }
`;
const Input = styled.input`
  width: 100%;
  background-color: rgba(19, 18, 18, 0.1);
  border-radius: 5px;
  border: 1px solid transparent;
  background-clip: padding-box;
  padding: 10px;
  &:focus {
    outline: 0;
    border: 1px solid transparent;
  }
  &:hover {
    -webkit-transition: border-color 0.3s ease-in-out;
    -moz-transition: border-color 0.3s ease-in-out;
    transition: border-color 0.3s ease-in-out;
    border: 1px solid #aaa;
  }
`;
const SendButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border-color: #414141;
  border-style: solid;
  color: ${(props) => props.theme.body};
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
  &:hover {
    background-color: rgb(27, 27, 27);
    border-color: rgb(27, 27, 27);
    -webkit-transition: background 0.3s ease-in-out;
    -moz-transition: background 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;
  }
`;
const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? '90%' : '45%')};
  right: ${(props) => (props.click ? '87%' : '46%')};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 2s ease;

  & > :last-child {
    padding-top: 1rem;
  }
  & > :first-child {
    animation: ${rotate} infinite 15s linear;
  }
`;
