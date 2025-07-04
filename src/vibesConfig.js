// Enhanced vibes with more sophisticated particle configurations and additional themes

export const vibes = [
  {
    name: 'Forest',
    colors: {
      primary: '#4CAF50',
      secondary: '#8BC34A',
      bg: '#1B5E20',
      text: '#FFFFFF',
    },
    soundSrc: '/sounds/forest.mp3',
  },
  {
    name: 'Rain',
    colors: {
      primary: '#2196F3',
      secondary: '#64B5F6',
      bg: '#1A237E',
      text: '#E3F2FD',
    },
    soundSrc: '/sounds/rain.mp3',
  },
  {
    name: 'Space',
    colors: {
      primary: '#9C27B0',
      secondary: '#E1BEE7',
      bg: '#000000',
      text: '#FFFFFF',
    },
    soundSrc: '/sounds/space.mp3',
  },
  {
    name: 'Ocean',
    colors: {
      primary: '#00BCD4',
      secondary: '#4DD0E1',
      bg: '#0D47A1',
      text: '#E1F5FE',
    },
    soundSrc: '/sounds/ocean.mp3',
  },
  {
    name: 'Sunset',
    colors: {
      primary: '#FF5722',
      secondary: '#FFC107',
      bg: '#BF360C',
      text: '#FFF3E0',
    },
    soundSrc: '/sounds/sunset.mp3',
  },
  {
    name: 'Neon',
    colors: {
      primary: '#E91E63',
      secondary: '#00E676',
      bg: '#000000',
      text: '#FFFFFF',
    },
    soundSrc: '/sounds/neon.mp3',
  },
];

export const getParticlesConfig = (vibeName) => {
  const baseConfig = {
    detectRetina: true,
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push"
        },
        onHover: {
          enable: true,
          mode: "attract"
        },
        resize: true
      },
      modes: {
        push: {
          quantity: 2
        },
        attract: {
          distance: 200,
          duration: 0.4,
          factor: 1
        }
      }
    }
  };

  switch (vibeName) {
    case 'Forest':
      return {
        ...baseConfig,
        particles: {
          number: { 
            value: 80,
            density: { enable: true, value_area: 800 }
          },
          color: { 
            value: ["#4CAF50", "#8BC34A", "#66BB6A", "#A5D6A7"]
          },
          shape: { 
            type: ["circle", "triangle"],
            options: {
              triangle: {
                sides: 3
              }
            }
          },
          opacity: { 
            value: 0.6,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: { 
            value: 4,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.5,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "bottom",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
          },
          links: {
            enable: false
          }
        }
      };

    case 'Rain':
      return {
        ...baseConfig,
        particles: {
          number: { 
            value: 300,
            density: { enable: true, value_area: 800 }
          },
          color: { 
            value: ["#2196F3", "#64B5F6", "#90CAF9", "#BBDEFB"]
          },
          shape: { 
            type: "line"
          },
          opacity: { 
            value: 0.7,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.3,
              sync: false
            }
          },
          size: { 
            value: { min: 1, max: 3 },
            random: true
          },
          move: {
            enable: true,
            speed: 15,
            direction: "bottom",
            random: false,
            straight: true,
            out_mode: "out",
            bounce: false,
            attract: { enable: false }
          },
          links: {
            enable: false
          }
        }
      };

    case 'Space':
      return {
        ...baseConfig,
        particles: {
          number: { 
            value: 160,
            density: { enable: true, value_area: 800 }
          },
          color: { 
            value: ["#ffffff", "#E1BEE7", "#9C27B0", "#BA68C8"]
          },
          shape: { 
            type: ["circle", "star"],
            options: {
              star: {
                sides: 5
              }
            }
          },
          opacity: { 
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: { 
            value: 2,
            random: true,
            anim: {
              enable: true,
              speed: 0.8,
              size_min: 0.3,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false }
          },
          links: {
            enable: true,
            distance: 150,
            color: "#9C27B0",
            opacity: 0.2,
            width: 1
          }
        }
      };

    case 'Ocean':
      return {
        ...baseConfig,
        particles: {
          number: { 
            value: 100,
            density: { enable: true, value_area: 800 }
          },
          color: { 
            value: ["#00BCD4", "#4DD0E1", "#80DEEA", "#B2EBF2"]
          },
          shape: { 
            type: "circle"
          },
          opacity: { 
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: { 
            value: 6,
            random: true,
            anim: {
              enable: true,
              speed: 3,
              size_min: 0.5,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 2,
            direction: "top",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false }
          },
          links: {
            enable: false
          }
        }
      };

    case 'Sunset':
      return {
        ...baseConfig,
        particles: {
          number: { 
            value: 60,
            density: { enable: true, value_area: 800 }
          },
          color: { 
            value: ["#FF5722", "#FFC107", "#FF9800", "#FFAB40"]
          },
          shape: { 
            type: "circle"
          },
          opacity: { 
            value: 0.6,
            random: true,
            anim: {
              enable: true,
              speed: 1.5,
              opacity_min: 0.2,
              sync: false
            }
          },
          size: { 
            value: 8,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 1,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 1,
            direction: "top-right",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false }
          },
          links: {
            enable: false
          }
        }
      };

    case 'Neon':
      return {
        ...baseConfig,
        particles: {
          number: { 
            value: 120,
            density: { enable: true, value_area: 800 }
          },
          color: { 
            value: ["#E91E63", "#00E676", "#FF1744", "#00E5FF"]
          },
          shape: { 
            type: ["circle", "triangle", "polygon"],
            options: {
              polygon: {
                sides: 6
              }
            }
          },
          opacity: { 
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              opacity_min: 0.3,
              sync: false
            }
          },
          size: { 
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 3,
              size_min: 0.5,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: true,
            attract: { enable: false }
          },
          links: {
            enable: true,
            distance: 100,
            color: "#E91E63",
            opacity: 0.4,
            width: 1,
            triangles: {
              enable: true,
              color: "#00E676",
              opacity: 0.1
            }
          }
        }
      };

    default:
      return baseConfig;
  }
};