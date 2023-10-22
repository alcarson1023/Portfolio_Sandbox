import React from "react";
import { Circle } from "react-konva";

class Particle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: Math.random() * 400, // Confine particles within a 400x400 square
      y: Math.random() * 400,
      velocityX: Math.random() * 2 - 1, // Random velocity between -1 and 1
      velocityY: Math.random() * 2 - 1,
      radius: 5, // Particle radius
    };

    // Set an update interval to move particles
    this.updateInterval = setInterval(this.updatePosition, 16); // Adjust the interval as needed
  }

  updatePosition = () => {
    const { x, y, velocityX, velocityY, radius } = this.state;
    const stageWidth = 400; // Width of the confined area
    const stageHeight = 400; // Height of the confined area

    // Calculate the next position
    let nextX = x + velocityX;
    let nextY = y + velocityY;

    // Reflect off the boundaries
    if (nextX - radius < 0 || nextX + radius > stageWidth) {
      this.setState({ velocityX: -velocityX });
    }
    if (nextY - radius < 0 || nextY + radius > stageHeight) {
      this.setState({ velocityY: -velocityY });
    }

    // Update the position
    this.setState({
      x: nextX,
      y: nextY,
    });

    // Check for collisions with other particles
    this.checkParticleCollisions();
  };

  checkParticleCollisions() {
    const { x, y, radius, velocityX, velocityY } = this.state;
    const { particles } = this.props; // Access the 'particles' prop correctly

    for (let particle of particles) {
      if (particle === this) {
        // if(true){
        continue; // Skip self-check
      }

      const dx = particle.ref.current.state.x - x;
      const dy = particle.ref.current.state.y - y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 2 * radius) {
        // Particles have collided

        // Calculate collision angle and new velocities
        const collisionAngle = Math.atan2(dy, dx);
        const thisSpeed = Math.sqrt(
          velocityX * velocityX + velocityY * velocityY
        );

        const otherSpeed = Math.sqrt(
          particle.ref.current.state.velocityX *
            particle.ref.current.state.velocityX +
            particle.ref.current.state.velocityY *
              particle.ref.current.state.velocityY
        );

        const thisDirection = Math.atan2(velocityY, velocityX);
        const otherDirection = Math.atan2(
          particle.ref.current.state.velocityY,
          particle.ref.current.state.velocityX
        );

        // Update velocities
        this.setState({
          velocityX: otherSpeed * Math.cos(otherDirection - collisionAngle),
          velocityY: otherSpeed * Math.sin(otherDirection - collisionAngle),
        });

        particle.ref.current.setState({
          velocityX: thisSpeed * Math.cos(thisDirection - collisionAngle),
          velocityY: thisSpeed * Math.sin(thisDirection - collisionAngle),
        });
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval); // Clear the interval when the component unmounts
  }

  render() {
    const { x, y, radius } = this.state;

    return <Circle x={x} y={y} radius={radius} fill="blue" />;
  }
}

export default Particle;
