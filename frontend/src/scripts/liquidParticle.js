import React from "react";
import { Circle } from "react-konva";
import Particles from "react-particles";

import { useCallback } from "react";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

function ParticlesSim() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Particles
        style={{ maxHeight: "400px", maxWidth: "500px", position: "fixed", borderRadius: "150px" }}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: false,
          },
          background: {
            color: {
              value: "#0d47a1",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },

          interactivity: {
            detect_on: "window",
            events: {
              onDiv: [
                {
                  enable: true,
                  selectors: ".bounce",
                  mode: "bounce",
                  type: "rectangle",
                },
              ],
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 6,
                color: "#000000",
              },
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },

          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: false, // ALEX
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "up",
              decay: 0.02,
              gravity: { enable: true },
              collisions: true,
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 800,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "star",
            },
            size: {
              value: { min: 3, max: 3 },
              // value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
}

export default ParticlesSim;
