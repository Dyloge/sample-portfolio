import React from 'react';
import Particles from 'react-particles-js';
import snowParticlesConfig from '../config/snow-particles-config';

const SnowParticleBackground = () => {
  return <Particles params={snowParticlesConfig}></Particles>;
};

export default SnowParticleBackground;
