const snowParticlesConfig = {
  particles: {
    number: {
      value: 43,
      density: {
        enable: true,
        value_area: 1121.68701727398,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'polygon',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 6,
      },
    },
    opacity: {
      value: 0.9,
      random: true,
      anim: {
        enable: true,
        speed: 0.324609454250355,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 4.006025061692785,
      random: true,
      anim: {
        enable: true,
        speed: 4.869141813755324,
        size_min: 0,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: '#ffffff',
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 3.204820049354228,
      direction: 'bottom',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 3445.1815530557956,
        rotateY: 400.60250616927857,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
      onclick: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: 0.3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 50,
        duration: 0.9,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};
export default snowParticlesConfig;
