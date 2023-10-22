import React, { Component } from "react";
import { Stage, Layer } from "react-konva";
import Particle from "../scripts/liquidParticle.js";

class ParticleSimulation extends Component {
  state = {
    numberOfParticles: 5,
    particles: [], // Define and initialize the particles array
  };

  componentDidMount() {
    const { numberOfParticles } = this.state;
    const particles = Array.from({ length: numberOfParticles }).map((_, index) => ({
      key: index,
      ref: React.createRef(),
    }));
    this.setState({ particles });
  }

  render() {
    const { particles } = this.state;

    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {particles.map((particle) => (
            <Particle
              key={particle.key}
              particles={particles}
              ref={particle.ref}
            />
          ))}
        </Layer>
      </Stage>
    );
  }
}

export default ParticleSimulation;
