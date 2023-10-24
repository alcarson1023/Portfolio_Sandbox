import { React, useEffect } from "react";

import { loadAngleUpdater } from "tsparticles-updater-angle";

import gsap from "gsap";
import Draggable from "gsap/Draggable";

import Particles from "react-particles";

import { useCallback } from "react";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.


import {
  BothPanels,
  LeftPanel,
  RightPanel,
  Header,
} from "../styles/basePage_style.js";

import { BounceTop } from "../styles/liquid_style.js";

import ParticlesSim from "../scripts/liquidParticle.js";

// loadAngleUpdater(Particles);

function Liquid() {
  
  useEffect(() => {
    gsap.registerPlugin(Draggable);

    Draggable.create(".draggable", {
      type: "rotation",
      onPress: function () {
        console.log("clicked");
      },
    });
  }, []);

  return (
    <>
      <Header>
        <h1>Welcome To The Simulation!</h1>
      </Header>
      <BothPanels>
        <LeftPanel>
          <div
            className="draggable"
            style={{
              width: "600px",
              height: "400px",
              backgroundColor: "green",
              position: "absolute",
            }}
          >
            <BounceTop className="bounce"></BounceTop>
          </div>
          <div style={{ position: "absolute" }}>
          <ParticlesSim />
          </div>
        </LeftPanel>
        <RightPanel>
          This is a test of the Emergency Right Panel system!
        </RightPanel>
      </BothPanels>
    </>
  );
}

export default Liquid;
