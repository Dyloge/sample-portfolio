import React, { useState } from 'react';
import styled from 'styled-components';
import Tilt from 'react-vanilla-tilt';
import ReactCardFlip from 'react-card-flip';
import Me from '../assets/Images/profile-image.jpeg';
import 'animate.css';

const VisitCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <MainContainer className='animate__animated animate__fadeIn'>
      <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
        <Front>
          <FlipButton onClick={handleFlip}>
            <TiltContainer>
              <Tilt style={{ width: '400px', height: '230px' }}>
                <Container>
                  <Card style={{ width: '400px', height: '230px' }}>
                    <Toolbar>
                      <span></span>
                      <span></span>
                      <span></span>
                    </Toolbar>
                    <Body>
                      <LineNumber>
                        <ul>
                          <li>254</li>
                          <li>255</li>
                          <li>256</li>
                          <li>257</li>
                          <li>258</li>
                          <li>259</li>
                          <li>260</li>
                          <li>261</li>
                          <li>262</li>
                          <li>263</li>
                          <li>264</li>
                        </ul>
                      </LineNumber>
                      <Code>
                        <ul>
                          <li style={{ color: '#636d83' }}>
                            <span>&#47;&#47;</span> - - - - - - - -
                          </li>
                          <li style={{ color: ' #636d83' }}>
                            <span>&#47;&#47;</span> Dyloge
                          </li>
                          <li style={{ color: ' #636d83' }}>
                            <span>&#47;&#47;</span> - - - - - - - -
                          </li>
                          <li>
                            <Let>const</Let>
                            <Person> Person</Person>
                            <Let>
                              &nbsp; <span>&#61;</span>&nbsp;
                            </Let>
                            <span>&#10100;</span>
                          </li>
                          <li>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;first_name
                            <Ch>:</Ch>&nbsp;&nbsp;
                            <Value>'Amir'</Value>,
                          </li>
                          <li>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;last_name
                            <Ch>:</Ch>&nbsp;&nbsp;&nbsp;
                            <Value>'Najafi'</Value>,
                          </li>
                          <li>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gender
                            <Ch>:</Ch>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Value>'Male'</Value>,
                          </li>
                          <li>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;birth_year
                            <Ch>:</Ch>&nbsp;&nbsp;
                            <Value>'1982'</Value>,
                          </li>
                          <li>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;location
                            <Ch>:</Ch>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Value>'Krakow, Poland'</Value>,
                          </li>
                          <li>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;number
                            <Ch>:</Ch>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Value>'+(48)884965899'</Value>
                          </li>
                          <li>
                            <span>&#10101;</span>;
                          </li>
                        </ul>
                      </Code>
                    </Body>
                  </Card>
                </Container>
              </Tilt>
            </TiltContainer>
          </FlipButton>
        </Front>

        <Back>
          <FlipButton onClick={handleFlip}>
            <TiltContainer>
              <Tilt style={{ width: '400px', height: '230px' }}>
                <Container>
                  <Card style={{ width: '400px', height: '230px' }}>
                    <Toolbar>
                      <span></span>
                      <span></span>
                      <span></span>
                    </Toolbar>

                    <TextBox>
                      <ProfileImage src={Me} />
                      <Name>Amir Najafi</Name>
                      <Description>Front-end Web Developer</Description>
                    </TextBox>
                  </Card>
                </Container>
              </Tilt>
            </TiltContainer>
          </FlipButton>
        </Back>
      </ReactCardFlip>
    </MainContainer>
  );
};

export default VisitCard;

//-----Styled Components-----
const MainContainer = styled.div`
  position: relative;
  z-index: 1000;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Front = styled.div`
  z-index: 100;
  position: absolute;
  top: 20%;
  left: 29%;
`;
const Back = styled.div`
  z-index: 100;
  position: absolute;
  top: 20%;
  left: 29%;
`;
const TiltContainer = styled.div``;
const Container = styled.div``;
const Card = styled.div`
  background-color: rgba(40, 44, 52, 0.9);
  border-radius: 5px;
  margin-top: 116px;

  cursor: pointer;
  font-family: 'Fira Code', monospace;
`;
const Toolbar = styled.div`
  background-color: rgba(33, 37, 43, 0.9);
  border-radius: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;

  span {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-right: 7px;
    &:first-child {
      background-color: rgba(255, 96, 88, 0.9);
    }
    &:nth-child(2) {
      background-color: rgba(255, 189, 46, 0.9);
    }
    &:last-child {
      background-color: rgba(40, 202, 65, 0.9);
      margin-right: 0px;
    }
  }
`;
const Body = styled.div`
  padding: 10px;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 10fr;
  grid-template-columns: 1fr 10fr;
  grid-column-gap: 30px;
`;
const LineNumber = styled.div`
  border-right: 1px #636d83 solid;
  ul {
    list-style: none;
    li {
      color: #636d83;
      margin-bottom: 3px;
      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
`;
const Code = styled.div`
  ul {
    list-style: none;
    li {
      color: #bbbbbb;
      margin-bottom: 3px;
      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
`;
const Ch = styled.span`
  color: #56b6c2;
`;
const Value = styled.span`
  color: #56b6c2;
`;
const Let = styled.span`
  color: #c678dd;
`;
const Person = styled.span`
  color: #8556c2;
`;
const TextBox = styled.div`
  color: #bbbbbb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const ProfileImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
`;

const Name = styled.h1`
  font-size: 130%;
  margin-top: 20px;
`;
const Description = styled.h1`
  font-size: 70%;
  margin-top: 5px;
`;
const FlipButton = styled.div`
  border: none;
`;
